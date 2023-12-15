// function printFormPattern(numRows) {
//     for (let i = 0; i < numRows; i++) {
//         let row = '';

//         for (let j = 0; j < numRows - i - 1; j++) {
//             row += '  '; 
//         }

     
//         for (let k = 0; k < 2 * i + 1; k++) {
//             row += '* ';
//         }

//         console.log(row);
//     }
// }


// const numRows = 7;
// printFormPattern(numRows);

function printAsteriskLine(numAsterisks) {
    let line = '';
    for (let i = 0; i < numAsterisks; i++) {
        line += '* ';
    }
    console.log(line);
}

const numAsterisks = 10;
printAsteriskLine(numAsterisks);