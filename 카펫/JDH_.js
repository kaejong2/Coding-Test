const solution = (brown, yellow) => {
    // 14 -> 4
    // 12 -> 3
    // 10 -> 2
    // 8-> 1
    let answer = [];
    answer[0] = Math.floor((brown + yellow) / (yellow + 1))
    answer[1] = yellow + 1;
    if ( answer[0] <= answer[1] ) {
        answer = [answer[1], answer[0]];
    }
    let count = 0;
    while (true) {
        count++;
        console.log('start')
        console.log(answer);
        
        if ( ( brown + yellow ) % answer[0] != 0 || (brown + yellow) < answer[0] * answer[1]) {
            answer[0]--;
        } else if ( (brown + yellow) != answer[0] * answer[1] ) {
            answer[1]++;
        } else if ( answer[1] < yellow ) {
            answer[1]++;
        } else {
            break;
        }
        if (count == 100) break;
    }

}

solution(24, 24)