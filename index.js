// Valid Bracket Sequence
const sequence = '('

function solution(sequence) {
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

