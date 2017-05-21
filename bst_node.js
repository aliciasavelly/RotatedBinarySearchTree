class BSTNode {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
    this.leftDepth = 0;
    this.rightDepth = 0;
    this.leftChild = undefined;
    this.rigthChild = undefined;
  }

  setParent(parent) {
    this.parent = parent;
  }

  addLeftDepth() {
    this.leftDepth += 1;
  }

  addRightDepth() {
    this.rightDepth += 1;
  }

  setLeftDepth(depth) {
    this.leftDepth = depth;
  }

  setRightDepth(depth) {
    this.rightDepth = depth;
  }

  setLeftChild(child) {
    this.leftChild = child;
  }

  setRightChild(child) {
    this.rightChild = child;
  }
}

export default BSTNode;
