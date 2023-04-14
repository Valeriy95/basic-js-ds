const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor(value) {
    this.data = value;
    this.roos = null;
    this.left = null;
    this.right = null;
 }

  root() {
    return this.roos;
  }

  add(data) {
    this.roos = addNode(this.roos, data);
    function addNode (n, data) {
      if(!n) {
        return new BinarySearchTree(data);
      } else if(n.data === data) {
        return n;
      } else if (data < n.data) {
        n.left = addNode(n.left, data);
      } else {
        n.right = addNode(n.right, data);
      }
      return n;
    }
  }

  has(data) {
    return contains(this.roos, data);
    function contains(n, data) {
      if (!n) {
        return false;
      } else if(n.data === data) {
        return true;
      } else if (data < n.data) {
        return contains(n.left, data);
      } else {
        return contains(n.right, data);
      }
    } 
  }

  find(data) {
    return search(this.roos, data); 
    function search(n, data) {
      if (!n) {
        return null;
      } else if(n.data === data) {
        return n;
      } else if(data < n.data) {
        return search(n.left, data);
      } else {
        return search(n.right, data);
      }
    } 
  }

  remove(data) {
    this.roos = deleteNode(this.roos, data);
    function deleteNode (n, data) {
      if(!n) {
        return null;
      } else if (n.data < data) {
        n.right = deleteNode(n.right, data);
        return n; 
      } else if (data < n.data) {
        n.left = deleteNode(n.left, data);
        return n;
      } else {
        if(!n.left && !n.right) {
          return null;
        } else if(!n.right) {
          n = n.left;
          return n;
        } else if(!n.left) {
          n = n.right;
          return n;
        } else {
          let min = n.right;
          while(min.left) {
            min = min.left;
          }
          n.data = min.data;
          n.right = deleteNode(n.right, min.data);
        }
      }
      return n;
    }
  }

  min() {
    let currentMin = this.roos;
    while(currentMin.left) {
      currentMin = currentMin.left;
    }
    return currentMin.data
  }

  max() {
  let currentMax = this.roos;
   while(currentMax.right) {
    currentMax = currentMax.right;
   }
   return currentMax.data
  }
}

module.exports = {
  BinarySearchTree
};