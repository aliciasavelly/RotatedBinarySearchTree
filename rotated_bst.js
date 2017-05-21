const BSTNode = require('./bst_node.js');

class RBST {
  constructor(root) {
    this.root = root;
  }
}

let node = new BSTNode(10);
let tree = new RBST(node);
console.log(tree.root);
