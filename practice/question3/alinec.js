// Carry out a chain of conversions: 
// create a Boolean from a BigInt created from 
// a Number that was created from a String. Start with the value "1234". Is it possible?

// let num = "1234";
// let num1 = String(num);
// let num2 = Number(num1);
// let num3 = BigInt(num2);
// let num4 = Boolean(num3);
// console.log(`${num4} : ${typeof num4}`);
let c = Boolean(BigInt(Number(String("1234"))));
console.log(typeof c);