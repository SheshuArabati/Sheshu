const reverse = (str) => {
    if (!str) return str;
    return reverse(str.substring(1)) + str.charAt(0);
}
console.log(reverse("Sheshu"));