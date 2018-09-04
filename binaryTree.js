/********************************
Theoretically, a Linked list looks like this:
            14
           /  \
          8    19
         / \
        2   10

In Javascript, we can use Objects to represent the same structure.
Instead of "/" or "\", we use keys called "left" and "right"

	var root = {
   		value: 14,
   		left: {
	    	value: 8,
	    	left: {
	        	value: 2,
	        	left: null,
	        	right: null
	    	},
	    	right: {
				value: 10,
				left: null,
				right: null
	    	}
   		},
   		right: {
			value: 19,
			left: null,
			right: null
   		}
	}

In the example below, instead of using a variable "root" we're using a class 
with a property called "this.root".
this.root is a pointer to the first node of the binary tree.
Each node looks like:

	{
	   value: 13,
	   left: null,
	   right
	}

where "left" and "right" points to either the next node, or "null" if the node is a leaf in the tree

Your task is to implement the methods below for:
  1) Finding the minimum element of a tree
  2) Finding the maximum element of a tree
  3) Printing the elements of a tree in increasing order

*********************************/
class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = {
			value: value,
			left: null,
			right: null
		};

		if(this.root === null) {
        	this.root = newNode;
		} else {
       		this.insertNode(this.root, newNode);
		}

		return this;
	}

	insertNode(node, nodeToInsert) {
		if (node.value > nodeToInsert.value) {
			if (node.left === null) {
				node.left = nodeToInsert;
			} else {
				this.insertNode(node.left, nodeToInsert)
			}
			
		} else {
			if (node.right === null) {
				node.right = nodeToInsert;
			} else {
				this.insertNode(node.right, nodeToInsert)
			}
		}
	}

	findMaxElement() {
		// This function should return the largest value in the tree
	}

	findMinElement() {
		// this function should return the smallest value in the tree
	}

	printInOrder() {
		// Use recursion to print the elements of the tree in increasing order!
		// Hint: Printing the whole left side of a node, then itself, then the whole right side will give you increasing order!
		// The insert method above uses recursion, use it as a reference
		
	}
}

// Run "node binaryTree.js" to test your code!
let binaryTree = new BinaryTree();

binaryTree.insert(14).insert(15).insert(13).insert(22);
console.log("\n The max element is: ");
console.log(binaryTree.findMaxElement());
console.log("\n The min element is: ");
console.log(binaryTree.findMinElement());
console.log("\n The elements in order are: ");
console.log(binaryTree.printInOrder());
