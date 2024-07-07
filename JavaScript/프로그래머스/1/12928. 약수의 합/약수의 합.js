function solution(n) {
    var answer = 0;
    var set = []
    
    for(var i=1; i<= n; i++){
        if(n % i === 0) set.push(i)
    }
    
    [...new Set(set)].forEach((val) => answer += val)
    return answer;
}