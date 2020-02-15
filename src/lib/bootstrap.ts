// import { createComponent } from './creacte-component';
// import { IModule } from '../interfaces/module';
import { AppComponent } from '../app.component';
import { appModule } from '../app-module';

export function bootstrap() {
  const container = document.getElementById('app');
  // const Ctor = appModule.bootstrap[0];
  const instance = new (AppComponent as any)(appModule);
  container?.appendChild(instance as any);
}