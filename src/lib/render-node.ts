export class RenderNode {
  constructor(public instance: any, public parentNode: RenderNode | null, public children: RenderNode[] = []) { }
}