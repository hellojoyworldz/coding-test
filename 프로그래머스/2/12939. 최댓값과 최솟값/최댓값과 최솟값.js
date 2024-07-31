function solution(s) {
    var answer = '';
    var num = s.split(" ").map(val => Number(val))
    answer = Math.min(...num) + " " + Math.max(...num)
    return answer;
}