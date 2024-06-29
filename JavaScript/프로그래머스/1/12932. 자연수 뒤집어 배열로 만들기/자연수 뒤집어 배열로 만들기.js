function solution(n) {
    var answer = [];
    
    
    
    answer = String(n).split("").reverse().map(val => Number(val))
    return answer;
}