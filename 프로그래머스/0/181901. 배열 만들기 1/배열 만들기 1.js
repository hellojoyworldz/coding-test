function solution(n, k) {
    var answer = [];

    for(var i=1; i <= Math.floor(n/k); i++){
        answer.push(k*i)
    } 
    return answer;
}