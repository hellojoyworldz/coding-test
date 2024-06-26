function solution(a, d, included) {
    var answer = 0;
    
    for(let n=0; n < included.length; n++){
        if(included[n]) answer += d*n + a
    }
    return answer;
}