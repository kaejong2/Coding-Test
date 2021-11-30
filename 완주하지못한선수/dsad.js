const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    solution(line);
    rl.close();
}).on('close', () => process.exit());

const solution = (participant, completion) {
    var answer = '';

    answer = Array.from(participant).filter(v => {
        if ( Array.from(completion).includes(v) ) {
            let i = Array.from(completion).indexOf(v);
            completion.splice(i, 1);

            return false;
        }
        return true;
    });

    return answer[0];
}