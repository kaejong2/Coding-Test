const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    solution(line);
    rl.close();
}).on('close', () => process.exit());

const solution = answer => {
    answer = answer.replace(/[\]\[(\s)]/g, '').split(',').map(v => Number(v));
    
    let result = [0, 0, 0];

    let getB = i => {
        if ( i % 2 == 0 ) return 2;
        else if ( i == 5 ) return 4;
        else if ( i == 7 ) return 5;
        else return i;
    }

    let getC = i => {
        if ( i < 2 ) return 3
        else if ( i < 4 ) return 1
        else if ( i < 6 ) return 2
        else if ( i < 8 ) return 4
        else if ( i < 10 ) return 5
    }

    let i = 0;
    for (; i < answer.length; i++) {
        let a, b, c;

        a = ( i % 5 ) + 1;
        b = getB(i % 8);
        c = getC(i % 10);

        result[0] = a == answer[i] ? ++result[0] : result[0];
        result[1] = b == answer[i] ? ++result[1] : result[1];
        result[2] = c == answer[i] ? ++result[2] : result[2];
    }

    
}