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
    if ( !/((\w)\2{1,})/g.test(s) ) {
        console.log(-1); 
        return 0;
    }

    let result = Array.from(s).reduce((p, c, i, a) => {
        console.log(p, c);
        if ( p === c ) {
            return ''
        }
        return p + c;
    });

    console.log(`result : ${result} `);

    return 1;
}