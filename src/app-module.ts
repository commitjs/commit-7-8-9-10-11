import { RouterLinkComponent } from './router/router-link.component';
import { RouterComponent } from './router/router.component';
import { Test1Component } from './test1.component'
import { Test2Component } from './test2.component';
import { HgModule } from './lib/hg-module';

export const appModule = new HgModule({
  declarations: [
    RouterLinkComponent,
    RouterComponent,
    Test1Component,
    Test2Component
  ]
});
