function solution(a, b) {
    var answer = 0;
    
    answer = (a+b) * (Math.abs(a-b)+1)/2
    return answer;
}