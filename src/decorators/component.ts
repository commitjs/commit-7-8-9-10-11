import { IComponent } from "../interfaces/component";
import { TemplateResult, renderWithoutCommit } from "lit-html";

import { workLoop } from '../lib/work-loop';
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

        target.call(this);

        const root = this.attachShadow({ mode: 'open' });
        let updateScheduled = false;
        this._update = () => {
          if (updateScheduled) { return; }
          updateScheduled = true;

          // Promise.resolve().then(() => {
          workLoop.pushWork(() => {
            updateScheduled = false;
            const template = templateFn(this as any);
            const templateNode = renderWithoutCommit(template, root);
            const commitFn = templateNode.getCommitFn(appModule);
            return commitFn;
          });

          // });
        };
        // Promise.resolve().then(() => {
        this._update();
        // });
      }
    }

    const { constructor, ...others } = Object.getOwnPropertyDescriptors(target.prototype);
    Object.defineProperties(Cmp.prototype, others);

    customElements.define(selector, Cmp);
    (Cmp as any).selector = selector;
    return Cmp;
  }
}
