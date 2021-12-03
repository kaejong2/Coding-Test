const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    solution(line);
    rl.close();
}).on('close', () => process.exit());

const solution = (n, lost, reserve) => {
    n = 10;
    lost = [1, 29, 17, 15, 22]
    reserve = [2,3,5, 16, 20]

    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    let len = lost.length;
    let i = 0;
    for (; i < len; i++) {
        if ( reserve[i] == null || lost[i] == null ) break;
        if ( lost[i] + 1 == reserve[i] || lost[i] - 1 == reserve[i] ) {
            lost.shift();
            reserve.shift();
            
            i--;
        }

    }

    return n - lost.length;
}