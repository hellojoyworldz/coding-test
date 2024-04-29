function solution(box, n) {
    var answer = 0;
    
    box.map(val => {
        if(answer === 0) answer += Math.trunc(val/n)
        else answer *= Math.trunc(val/n)
    })
    return answer;
}