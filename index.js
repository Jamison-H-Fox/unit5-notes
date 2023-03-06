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