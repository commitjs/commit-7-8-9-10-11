import { Component } from './decorators/component';
import { html } from 'lit-html';
import { detectChanges } from './decorators/detect-changes';

const test2Comppnent = (context: Test2Component) => html`<div>Test 2 - ${context.test}</div>`

@Component({
  selector: 'hg-test',
  templateFn: test2Comppnent
})
export class Test2Component {
  @detectChanges test: any;
}