/*for(let i = 1; i <= 5; i++){
console.log(i);
}

j = 1;
while(j <= 5){
  console.log(j);
  j++;
}
//generate random numbers until one that's at least 0.5
 let randomNumber = 0;
 while (randomNumber < 0.5){
  randomNumber = Math.random();
 }
 console.log(randomNumber);
 */
/*
 //looping through an array
const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];
for (let index = 0; index < todoList.length; index++){
  const value = todoList[index];
  console.log(value);
}
*/
//accumulator pattern example1
const number = [1, 1, 3, 4];
let total = 0;
for(let i = 0; i < number.length; i++){
  const num = number[i];
  total = total + num;
}
console.log(total);


//accumulator pattern example1
 const numsDoubled = [];
 for(let i = 0; i < number.length; i++){
  const num = number[i]; 
  numsDoubled.push(num * 2);
 }
 console.log(numsDoubled);