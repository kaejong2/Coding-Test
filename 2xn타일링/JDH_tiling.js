const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    solution(line);
    rl.close();
}).on('close', () => process.exit());

const solution = input => {
    input = Number(input);
    
    const tile = [2 , 1];

    let width = input;
    const height = 2;
    
    let i = 0;
    for (; i < input; i++) {
        console.log(i);
    }
}