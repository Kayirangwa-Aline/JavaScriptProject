//Operators is like symbols used to perform some action on argument(operands)
//Assignment operators
const name = "Aline";
console.log(name);

let year = 2050;
  year = 2051;
  console.log(year);

  //arithmetic operators 
  //binary operators: addition +, subtraction -, multiplication *, division /, division remainder % and power **. 
  let a = 5;
  let b = 2;
  console.log("addition: ", a + b);
  console.log("substraction: ", a - b);
  console.log("multiplication: ", a * b);
  console.log("division: ", a / b);
  console.log("remainder: ", a % b);
  console.log("power: ", a ** b);

  //unary operators
  let str = "123";
  let n1 = +str;
  let n2 = -str;
  let n3 = -n2;
  let n4 = +"abcd";
  console.log(`${n1}: ${typeof n1}`);
  console.log(`${n2}: ${typeof n2}`);
  console.log(`${n3}: ${typeof n3}`);
  console.log(`${n4}: ${typeof n4}`);
  
  //Unary increment(++) and decrement operators(--)
  //post operator=> return value before change it 
  //pre operator=> return new value
  let t1= 10;
  let t2 = 10;
  console.log(t1);
  console.log(t1++);
  console.log(t1);
  console.log(t2);
  console.log(++t2);
  console.log(t2);
  let t3 = 20;
  let t4 = 20;
  console.log(t3);
  console.log(t3--);
  console.log(t3);
  console.log(t4);
  console.log(--t4);
  console.log(t4);
 //compound operator
  let n = 1;
  n = n + 2;
  console.log(n);
  n += 4;
  console.log(n);
  n -= 1;
  console.log(n);

  //logical operators
  const k = false;
  const l = true;
  const o = false;
  const h = true;
  console.log(k && l && o || h);
  console.log(k && l && (o || h));

  //string operator(concatenation '+')
  let g = "hello";
  let i = "guys";
  console.log( g + " "+ i); 


