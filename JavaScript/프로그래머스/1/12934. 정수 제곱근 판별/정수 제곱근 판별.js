function solution(n) {
    var answer = 0;
    var sqrt = Math.sqrt(n) 
    answer = sqrt% 1 === 0 ? (sqrt+1)**2 : -1
    
    return answer;
}