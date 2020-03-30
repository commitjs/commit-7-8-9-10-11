import { html } from 'lit-html';
// import { todoCompletedDirective } from './directives/todo-comleted';
import { Component } from './decorators/component';
import { detectChanges } from './decorators/detect-changes';
import { ITodo } from './interfaces/todo';
import { useState } from './utils/use-state';
import { appRoutes } from './app-routes';
import { createRef, bindRef } from './directives/ref';
// import { RouterLinkComponent } from './router/router-link.component';
// import { RouterComponent } from './router/router.component';
// import { createComponent } from './lib/creacte-component';

const rootTemplate = (context: AppComponent) => {
  // const router = createComponent(RouterComponent, undefined, { routes: appRoutes });
  // return html`
  // <nav>
  //   ${createComponent(RouterLinkComponent, 'Test 1', { to: '/', router })}
  //   ${createComponent(RouterLinkComponent, 'Test 2', { to: '/test-2', router })}
  //   <!-- <hg-router-link to="/" .router=${bindRef(context.router)}>Test 1</hg-router-link> -->
  //   <!-- <hg-router-link to="/test-2" .router=${bindRef(context.router)}>Test 2</hg-router-link> -->
  // </nav>
  // ${router}
  // <!-- <hg-router data-ref=${context.router} .routes=${appRoutes}></hg-router> -->
  // <input type="text" @keyup=${context.inputKeyupHandler} .value=${context.titleInputValue}>
  // <button ?disabled=${!context.titleInputValue} @click=${context.addTodoHandler}>Add Todo</button>
  // <div>${context.number.directive}</div>
  // <button @click=${() => { context.number.value = context.number.value + 1 }}>CHANGE!</button>
  // <ul>
  //   ${context.todos.map(
  //   todo =>
  //     html`<li class=${todoCompletedDirective(todo)} @click=${() => context.todoToggleHandler(todo)}> ${todo.title} ${todo.completed}</li>`)
  //   }
  // </ul>
  // `;
  return html`
  <div>
    <hg-test .test=${123}></hg-test>
    <hg-test .test=${345}></hg-test>
    <hg-test .test=${678}></hg-test>
  </div>
  
  `
}

@Component({ selector: 'hg-root', templateFn: rootTemplate })
export class AppComponent {

  @detectChanges titleInputValue = '';

  router = createRef();
  @detectChanges val = 123;
  @detectChanges val2 = 'HELLO';

  todos: ITodo[] = [];
  number = useState(1000);

  @detectChanges todoToggleHandler(todo: ITodo) {
    todo.completed = !todo.completed;
  }

  inputKeyupHandler(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.titleInputValue = target.value;
  }

  addTodoHandler() {
    this.todos = this.todos.concat({ title: this.titleInputValue, completed: false });
    this.titleInputValue = '';
  }

  constructor() {
    this.titleInputValue = '';

    setTimeout(() => {
      this.val = 345;
    }, 5000);
    setTimeout(() => {
      this.val2 = 'HELLO2';
    }, 5000);
  }

  connectedCallback() {
    console.log('Connected!');
  }
}
