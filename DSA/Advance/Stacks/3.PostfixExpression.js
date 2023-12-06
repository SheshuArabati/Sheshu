// Postfix expression

let str = "35+2-25*-";
let st = [];
for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch == "+" || ch == "-" || ch == "*" || ch == "/") {
        let b = st.pop();
        let a = st.pop();
        if (ch == "+") st.push(a + b);
        else if (ch == "-") st.push(a - b);
        else if (ch == "*") st.push(a * b);
        else st.push(a / b);
    } else {
        st.push(Number(ch));
    }
}
console.log(st[0]);