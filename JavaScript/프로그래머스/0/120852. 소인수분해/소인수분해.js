function solution(n) {
    var answer = [];
    
    for(i=2; i <= n;i++){
        while(n % i === 0){
            answer.push(i)
            n /= i
        }
    }
    
    if(n>1){
        answer.push(i)
    }
    
    answer = [...new Set(answer)].sort((a,b) => a-b)
    
    return answer;
}