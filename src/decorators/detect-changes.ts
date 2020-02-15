import { IComponent } from '../interfaces/component';

export function detectChanges(target: any, key: string, descriptor?: TypedPropertyDescriptor<any>): any {
  if (descriptor) {
    const currentMethod = descriptor.value;
    descriptor.value = function (this: IComponent, ...args: any[]) {
      currentMethod(...args);
      if (this._update) { this._update(); }
    }
    return descriptor;
  } else {
    const symbolKey = Symbol(key);
    Object.defineProperty(target, key, {
      set(newValue) {
        this[symbolKey] = newValue;
        if (this._update) { this._update(); }
      },
      get() {
        return this[symbolKey];
      }
    });
  }
}
