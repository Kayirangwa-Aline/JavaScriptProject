// let temperatures;
// let sum;
// let meanTemp;
//  function getMeanTemp(temperatures) {
//       sum = 0;
//       for (let i = 0; i < temperatures.length; i++) {
//       sum += temperatures[i];
//      }
//     meanTemp = sum / temperatures.length;
//  }
// //  temperatures = [14, 15, 28, 30, 45];
//  getMeanTemp( [14, 15, 28, 30, 45]);
//  console.log(`Mean Temp : ${meanTemp}`);

let temperatures = []
let sum;
let numT;
let meanTemp;
function getTemp(){
    numT = Number(prompt("how many total temperatures do you want to enter: ",numT));
    for(let i = 0; i< numT;i++){
        temperatures[i] = Number(prompt(`enter temp ${i}: `));
    }
}
 function getMeanTemp(temperatures) {
      sum = 0;
      for (let i = 0; i < temperatures.length; i++) {
      sum += temperatures[i];
     }
    meanTemp = sum / temperatures.length;
 }
 getTemp();
 getMeanTemp();
 console.log(`Mean Temp : ${meanTemp}`);