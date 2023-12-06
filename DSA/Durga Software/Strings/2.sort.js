let str = "welcome";
str = str.split('');
str.sort((a, b) => a.localeCompare(b));
console.log(str);
str = str.toString().replaceAll(',', '');
console.log(str);