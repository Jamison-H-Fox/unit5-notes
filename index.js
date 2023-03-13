// Valid Bracket Sequence
const sequence = '('

function validBracketSequence(sequence) {
    const stack = [];

    const match_map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let c of sequence) {
        if(['(', '[', '{'].includes(c)) {
            stack.push(c);
        } else {
            let match_char = match_map[c];

            let c2 = stack.pop();
            if (c2 !== match_char) {
                return false;
            }
            
        }
    }

    return stack.length; // this works because stack.length will evalute to false if == 0, or truthy if non-0
}

// Node list stuff

// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//

const head = [1, 2, 3];
const value = 99;
const index = 3;

function nodeListStuff(head, value, index) {
    let n = new ListNode(value);

    if (head == null) {
        return n;
    }

    if (index <= 0) {
        n.next = head;
        return n;
    }
    
    let prev = head;
    let cur = head.next;
    let cur_index = 1;

    while (cur != null) {
        if(cur_index == index) {
            prev.next = n;
            n.next = cur;
            
            return head;
        }
        
        prev = prev.next;
        cur = cur.next;
        cur_index++;
    }
    
    prev.next = n;
    
    return head;
}

console.log(nodeListStuff(head, value, index))

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(l, value) {
    let n = new ListNode(value);
    
    // if empty list, return n
    if(l == null) {
        return n
    }
    
    // find appropriate node and insert in place
    let previous = l;
    let current = l.next;
    
    console.log(previous)
    console.log(current)
}

// performs an lft and returns an array of values traversed
const levelFirstTraversal = (root) => {
    if (root === null) {
        return []
    }
    
    let queue = [root];
    let output = [];
    
    while(queue.length !== 0) {
        root = queue.shift()
        output.push(root.value);
        if(root.left !== null) {
            queue.push(root.left)
        }
        if(root.right !== null) {
            queue.push(root.right)
        }
    }
    
    return output
}

// recursively searches a binary search tree for a given value
const searcher = (root, value) => {
    if (root === null) {
        return false;
    }
    
    if (value === root.value) {
        return true;
    } else if(value < root.value) {
        return searcher(root.left, value)
    } else {
        return searcher(root.right, value)
    }
}

// returns an array of values visited.
// I couldn't figure out how to visit in proper order,
// so I just did a .sort() on them after 🤷‍♂️
const inOrderTraversal = (root) => {
    if (root === null) {
        return []
    };
    
    const stack = [root];
    const output = [];
    
    while(stack.length !== 0) {
        root = stack.pop();
        output.push(root.value);
        if(root.right !== null) {
            stack.push(root.right)
        }
        if(root.left !== null) {
            stack.push(root.left)
        }
    }
    
    return output
}

// binary and linear search algorithms
const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }        
    }
    
    return -1
}

const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return mid;
        }

        if (target < array[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return -1;
}

const builtInSort = (a) => {
    a.sort((a, b) => { return a - b });
    return a
}

const bubbleSort = (a) => {
    for (let top_index = a.length - 1; top_index >= 1; top_index--) {
        let swapped = false;
        
        for (let i = 0; i < top_index; i++) {
            if (a[i] > a [i + 1]) {
                // below is a modern variable swap
                // no need to create a temp variable to hold values
                [ a[i], a[i + 1] ] = [ a[i + 1], a[i] ];
                swapped = true;
            }
        }
        
        // break early if no swaps made in pass
        // small optimization
        if (!swapped) {
            break;
        }
    }
    
    return a;
}

const insertionSort = (a) => {
    for (let i = 1; i < a.length; i++) {
        // First, choose the element at index 1
        let current = a[i];
        let j;

        // Loop from right to left, starting from i-1 to index 0
        for (j = i - 1; j >= 0 && a[j] > current; j--) {
        // as long as a[j] is bigger than current
        // move a[j] to the right at a[j + 1]
            a[j + 1] = a[j];
        }
        // Place the current element at index 0
        // or next to the smaller element
        a[j + 1] = current;
    }
    return a;
}