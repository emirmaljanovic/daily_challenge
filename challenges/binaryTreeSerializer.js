/*
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
 * For example, given the following Node class
 * class Node:
 *    def __init__(self, val, left=None, right=None):
 *        self.val = val
 *        self.left = left
 *        self.right = right
 * The following test should pass:
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 *      1
 *    2   3
 *  4
*/

export class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;    
  }
  
  setLeft(node) {
    this.left = node;
  }
  
  setRight(node) {
    this.right = node;
  }
}

export function serialize(root) {
  if (!root) { return 'null'; }

  let resp = root.val;
  
  resp = `${resp},${serialize(root.left)}`;
  
  resp = `${resp},${serialize(root.right)}`;
  
  return resp;
}

export function deserialize(s) {
  
  const decode = (vals) => {
    for (let i = 0; i < vals.length; i++) {
      vals.shift(); // this node was created in previous iteration; therefore, shift()
      
      if (vals[i] === 'null') break; // if value is `null` we reached the end of the branch

      const newNode = new TreeNode(vals[i]);
      newNode.setLeft(decode(vals));
      newNode.setRight(decode(vals));
      
      return newNode;
    }
  };
  
  const splitted = s.split(',');
  const root = new TreeNode('root');
  root.setLeft(decode(splitted))
  root.setRight(decode(splitted))
  
  return root;
}
