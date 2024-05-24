function solution(s) {
    var answer = '';

    answer = s.split("").filter(val => s.indexOf(val) === s.lastIndexOf(val)).sort().join("")
    return answer;
}