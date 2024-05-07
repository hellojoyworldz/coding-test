function solution(n, numlist) {
    var answer = [];
    
    answer = numlist.filter(val => val%n === 0)
    return answer;
}