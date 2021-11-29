const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    solution(line);
    rl.close();
}).on('close', () => process.exit());

const solution = s => {

    let numbers = [
        { a: 'zero', b: e => e.replace(/zero/g, 0) },
        { a: 'one', b: e => e.replace(/one/g, 1) },
        { a: 'two', b: e => e.replace(/two/g, 2) },
        { a: 'three', b: e => e.replace(/three/g, 3) },
        { a: 'four', b: e => e.replace(/four/g, 4) },
        { a: 'five', b: e => e.replace(/five/g, 5) },
        { a: 'six', b: e => e.replace(/six/g, 6) },
        { a: 'seven', b: e => e.replace(/seven/g, 7) },
        { a: 'eight', b: e => e.replace(/eight/g, 8) },
        { a: 'nine', b: e => e.replace(/nine/g, 9) }
    ];

    for ( let i = 0; i < numbers.length; i++ ) {
        if ( s.includes(numbers[i].a) ) {
            s = numbers[i].b(s);
        }
    }

    return Number(s);
}