function printAsteriskLine(numAsterisks) {
    let line = '';
    for (let i = 0; i < numAsterisks; i++) {
        line += '* ';
    }
    console.log(line);
}

const numAsterisks = 10;
printAsteriskLine(numAsterisks);