function solution(n) {
    var answer = 0;
    
    for(var i=1; i <= n;i++){
        if(i * parseInt(n/i) === n) answer++
    }
    return answer;
}