function solution(numlist, n) {
    var answer = [];
    
    answer = numlist.sort((a,b) => b - a).sort((a,b) => Math.abs(n - a) - Math.abs(n - b))
    return answer;
}