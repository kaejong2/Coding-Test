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
    
    let man1 = answer => {
        let score = 0;
        let method = 1;
        answer.forEach(a => {
            console.log(a, method);
            if ( a == method++ ) score++;
            if ( method > 5 ) method = 1;
        });

        return score;
    }

    let man2 = answer => {
        let score = 0;
        let method = 1;
        answer.forEach((item, index) => {
            if ( index / 2 == 0 ) {
                score = item == 2 ? ++score : score;
            } else {
                score = item == method++ ? ++score : score;
            }
        });

        return score;
    }

    let man3 = answer => {
        
    }

    console.log(man1(answer));
    console.log(man2(answer));
}