import { IComponent } from "../interfaces/component";
import { TemplateResult, renderWithoutCommit } from "lit-html";

import { workLoop } from '../lib/work-loop';
import { renderTree } from "../lib/render-tree";
import { RenderNode } from "../lib/render-node";
// import { appModule } from "../app-module";

export function Component<T>({ selector, templateFn }: { selector: string, templateFn: (context: T) => TemplateResult }): any {
  return function componentDecorator(target: any) {

    // console.log(Reflect.getMetadata('design:paramtypes', target));
    const attributes = Reflect.getMetadata('component:attributes', target.prototype) || [];

    class Cmp extends HTMLElement implements IComponent {
      _update: () => void;

      static get observedAttributes() {
        return attributes;
      }

      attributeChangedCallback(name: any, oldValue: any, newValue: any) {
        (this as any)[name] = newValue;
      }

      constructor(appModule: any) {
        super();

        target.call(this, appModule);

        const renderNode = new RenderNode(this, renderTree.currentNode);
        if (!renderTree.root) { renderTree.root = renderNode; }
        renderNode.parentNode = renderTree.currentNode;

        if (renderNode.parentNode) {
          renderNode.parentNode.children.push(renderNode);
        }
        renderTree.all.push(renderNode);

        const getComponentCommitFn = () => {
          const template = templateFn(this as any);
          const templateNode = renderWithoutCommit(template, root);
          return () => {
            renderTree.currentNode = renderNode;
            templateNode.getCommitFn(appModule)();
            renderTree.currentNode = renderTree.currentNode.parentNode;
          }
        }

        const root = this.attachShadow({ mode: 'open' });
        let updateScheduled = false;
        this._update = () => {
          if (updateScheduled) { return; }
          updateScheduled = true;

          // Promise.resolve().then(() => {
          workLoop.pushWork(() => {
            updateScheduled = false;
            return getComponentCommitFn();
          });

          // });
        };
        Promise.resolve().then(() => {
          const commit = getComponentCommitFn();
          commit();
        });
      }
    }

    const { constructor, ...others } = Object.getOwnPropertyDescriptors(target.prototype);
    Object.defineProperties(Cmp.prototype, others);

    customElements.define(selector, Cmp as any);
    (Cmp as any).selector = selector;
    return Cmp;
  }
}


setTimeout(() => {
  console.log(renderTree);
}, 3000);