import { RenderNode } from "./render-node";

interface IRenderTree {
  root: RenderNode | null;
  currentNode: RenderNode | null;
  all: RenderNode[];
  updateNodes(): void;
}

export const renderTree: IRenderTree = {
  root: null,
  currentNode: null,
  all: [],
  updateNodes() {
    this.all.forEach(n => n.instance._update());
  }
};
