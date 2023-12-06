// Given a string str. Reverse equal pair of adjacent characters. Return the ans without adjacent duplicates

let str = "abccbd";
let st = [];
for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let lastEle;
    if (st.length) lastEle = st[st.length - 1];
    if (ch == lastEle) st.pop();
    else st.push(ch);
}
let ans = "";
for (let i = 0; i < st.length; i++) {
    ans += st[i];
}
console.log(ans);