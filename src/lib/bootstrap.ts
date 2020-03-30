// import { createComponent } from './creacte-component';
// import { IModule } from '../interfaces/module';
import { AppComponent } from '../app.component';
import { appModule } from '../app-module';
import { renderTree } from './render-tree';
import { RenderNode } from './render-node';

export function bootstrap() {
  const container = document.getElementById('app');
  // const Ctor = appModule.bootstrap[0];
  const instance = new (AppComponent as any)(appModule);

  // const rootRendeNode = new RenderNode(instance, null);
  // renderTree.root = rootRendeNode;
  // renderTree.currentNode = rootRendeNode;
  // renderTree.all.push(rootRendeNode);

  container?.appendChild(instance as any);
}