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
    if ( s.length % 2 != 0 ) return 0;
    
    let answer = [];
    s = [...s];
    
    let i = 0;
    for (; i < s.length; i++) {
        if ( ( s.length / 2 < i ) && ( s.length / 2 < answer.length ) ) {
            break;
        } else if ( answer[answer.length - 1] == s[i] ) {
            answer.pop()
        } else {
            answer.push(s[i]);
        }
    }
    
    return answer.length == 0 ? 1 : 0;
}