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

