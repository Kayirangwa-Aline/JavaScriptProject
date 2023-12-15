//Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

// const str1 = 42 + + "1";
// console.log(str1);

const str1 = 42 +Number("1");
console.log(str1);