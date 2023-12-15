function printFormPattern(numRows) {
    for (let i = 0; i < numRows; i++) {
        let row = '';
        for (let j = 0; j < numRows - i - 1; j++) {
            row += '  '; 
        }

        for (let k = 0; k < i + 1; k++) {
            row += '* ';
        }

        console.log(row);
    }
}
const numRows = 7;
printFormPattern(numRows);