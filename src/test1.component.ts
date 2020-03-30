import { Component } from './decorators/component';
import { html } from 'lit-html';
import { detectChanges } from './decorators/detect-changes';

const test1Comppnent = (context: Test1Component) => html`<div>Test 1</div>`

@Component({
  selector: 'hg-test-1',
  templateFn: test1Comppnent
})
export class Test1Component {

  @detectChanges myTestProp = 1000;

  constructor() {
    setTimeout(() => {
      this.myTestProp = 2000;
    }, 5000);
  }

}