import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import 'reflect-metadata';

import './router/router.component';
import { bootstrap } from './lib/bootstrap';
// import { appModule } from './app-module';
// import { AppComponent } from './app.component';

bootstrap();


// const testComponentTemplate = (context: TestComponent) => {
//   debugger
//   return html`<div>${context.title}</div>`;
// }

// export class TestComponent extends HTMLElement {
//   _title!: string;
//   _update: any;

//   set title(title: string) {
//     this._title = title;
//     this._update();
//   }

//   get title() {
//     return this._title;
//   }

//   constructor() {
//     super()
//     const root = this.attachShadow({ mode: 'open' });

//     this._update = () => {
//       const template = testComponentTemplate(this);
//       const templateNode = renderWithoutCommit(template, root);
//       const commit = templateNode.getCommitFn({ declarations });
//       setTimeout(() => {
//         commit();
//       }, 1000);
//     }

//     Promise.resolve().then(() => {
//       this._update();
//     });
//   }
// }
// customElements.define('app-test', TestComponent);
// declarations['app-test'] = TestComponent;

// const myDirective = directive(() => (part: NodePart) => {
//   part.setValue('HELLO!');
//   part.commit();
//   console.log('myDirective has been called!');
// });

// const appComponentTemplate = (context: AppComponent) => html`
//   ${myDirective()}
//   <app-test .title=${context.text}></app-test>
//   <div>${context.text}</div>
// `

// export class AppComponent extends HTMLElement {
//   text = 'SOME STRING!';
//   _update: any;
//   constructor() {
//     super()
//     const root = this.attachShadow({ mode: 'open' });
//     this._update = () => {
//       const template = appComponentTemplate(this);
//       const templateNode = renderWithoutCommit(template, root);
//       const commit = templateNode.getCommitFn({ declarations });
//       setTimeout(() => {
//         commit();
//       }, 1000);
//     }
//     this._update();
//     setTimeout(() => {
//       this.text = 'SOMETHING ELSE';
//       this._update()
//     }, 3000);
//   }
// }
// customElements.define('app-root', AppComponent);

// const container = document.getElementById('app');
// const app = new AppComponent();
// container?.appendChild(app);
