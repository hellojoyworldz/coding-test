function solution(n) {
    var answer = [];
    for(let i = 1; i<= n; i++){
        if (n%i == 0) answer.push(i)
    }

    return answer
}

function solution2(n) {
    var answer = [];
    
    for(let i=1; i <= n ;i++){
        if(n%i === 0){
            answer.push(i)
            answer.push(n/i)
        }
    }
    
    answer = answer.filter((val, idx, self) => self.indexOf(val) === idx).sort((a,b) => a-b)

    return answer;
}