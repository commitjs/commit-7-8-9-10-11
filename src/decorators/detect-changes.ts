import { IComponent } from '../interfaces/component';
import { renderTree } from '../lib/render-tree';

export function detectChanges(target: any, key: string, descriptor?: TypedPropertyDescriptor<any>): any {
  if (descriptor) {
    const currentMethod = descriptor.value;
    descriptor.value = function (this: IComponent, ...args: any[]) {
      currentMethod(...args);
      renderTree.updateNodes();
      // if (this._update) { this._update(); }
    }
    return descriptor;
  } else {
    const symbolKey = Symbol(key);
    Object.defineProperty(target, key, {
      set(newValue) {
        this[symbolKey] = newValue;
        renderTree.updateNodes();
        // if (this._update) { this._update(); }
      },
      get() {
        return this[symbolKey];
      }
    });
  }
}
