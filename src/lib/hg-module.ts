export class HgModule {
  declarations: any;
  constructor(confg: { declarations: any[] }) {
    this.declarations = confg.declarations.reduce((acc, cmp) => {
      acc[cmp.selector] = cmp;
      return acc;
    }, {});
  }
}
