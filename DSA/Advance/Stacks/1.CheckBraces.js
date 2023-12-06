// Check whether the given sequence of brackets are valid or not

const checkBraces = () => {
    let str = "[()()]{}";
    let stack = [str[0]];
    for (let i = 1; i < str.length; i++) {
        let ch = str[i];
        if (ch == "(" || ch == "[" || ch == "{") {
            stack.push(ch);
        } else {
            let ele = stack.pop();
            if (ch == ")" && ele != "(") return false;
            else if (ch == "]" && ele != "[") return false;
            else if (ch == "}" && ele != "{") return false;
        }
    }
    if (stack.length) return false;
    return true;
}

console.log(checkBraces());