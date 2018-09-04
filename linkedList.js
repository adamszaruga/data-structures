/********************************
Theoretically, a Linked list looks like this:
   HEAD => value1 => value 2 => value 3 

In Javascript, we can use Objects to represent the same structure.
Instead of "=>", we use a key called "next"

	var head = {
   		value: "val1",
   		next: {
	    	value: "val2",
	    	next: {
				value: "val3"
	    	}
   		}
	}

In the example below, instead of using a variable "head" we're using a class 
with a property called "this.head".
this.head is a pointer to the first node of the linked list.
Each node looks like:

	{
	   value: 13,
	   next: null
	}

where "next" points to either the next node, or "null" if the node is the tail

Your task is to implement the methods below for:
  1) adding elements to the top of the list
  2) searching for a node that has a given value
  3) printing the linked list as a string

*********************************/

class LinkedList {
	constructor() {
		this.head = null;
	}

	addToHead(value) {
		// IMPLEMENT THIS METHOD
		// Take the value, create a new node with it (var newNode = ???)
		// Make this new node the new head of the LL 
		// Make sure the old head now becomes the second node in the LL

		return this; //Keep this line! It will allow us to chain calls to addToHead(). (i.e., myLL.addToHead(1).addToHead(2).addToHead(100))
	}

	search(value) {
		// Use a while loop to inspect each node in the linked list down the chain
		// As soon as a node matches the given value, return that node
		// If you never find a node that has the given value, return undefined
	}

	print() {
		// This function should return a string representation of the linked list
		//    HEAD => 1 => 3 => 4 => END
		// HINT: Start with the string "HEAD => ", write a while loop to loop through
		//       each node, and keep appending "value => " to the string until you get 
		//       to the end of the linked list

	}
}


// run "node linkedList.js" in the console to test your code
let linkedList = new LinkedList();

// appends 4 nodes to the linked list
linkedList.addToHead(14).addToHead(15).addToHead(13).addToHead(22);

// prints the linked list
console.log(linkedList.print());

// finds the node that contains value 13
console.log(linkedList.search(13));
