function solution(a, b) {
    var answer = 1234567890;
    answer = 0;
    
    a.forEach((val, idx) => {
        answer += val * b[idx]
    })
    
    return answer;
}