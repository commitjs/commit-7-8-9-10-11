import { Component } from './decorators/component';
import { html } from 'lit-html';
import { createRef, getRefProp } from './directives/ref';
import { detectChanges } from './decorators/detect-changes';

const test2Comppnent = (context: Test2Component) => html`<div>
<div>Test 2 - ${context.test}</div>
<hg-test-1 data-ref=${context.hgTest1Ref}></hg-test-1>
${getRefProp(context.hgTest1Ref, i => i.myTestProp)}
</div>`

@Component({
  selector: 'hg-test',
  templateFn: test2Comppnent
})
export class Test2Component {
  @detectChanges test: any;
  hgTest1Ref = createRef();

  constructor() { }
}