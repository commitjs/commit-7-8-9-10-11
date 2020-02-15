import { Component } from '../decorators/component';
import { attribute } from '../decorators/attribute';
import { html } from 'lit-html';
// import { RouterComponent } from './router.component';

const routerLinkTemplate = (context: RouterLinkComponent) =>
  html`<slot></slot>`;


@Component({
  selector: 'hg-router-link',
  templateFn: routerLinkTemplate
})
export class RouterLinkComponent {

  to!: string;

  router!: any;

  connectedCallback(this: RouterLinkComponent & HTMLElement) {
    this.addEventListener('click', (event: MouseEvent) => {
      // event.stopImmediatePropagation();
      if (!this.router) { return; }
      this.router.navigate(this.to);
    });
  }
}