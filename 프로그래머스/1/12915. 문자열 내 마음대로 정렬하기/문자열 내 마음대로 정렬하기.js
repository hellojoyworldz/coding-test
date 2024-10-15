function solution(strings, n) {
    var answer = [];
    
    answer = strings.sort().sort((a,b) => {
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
    })
    return answer;
}