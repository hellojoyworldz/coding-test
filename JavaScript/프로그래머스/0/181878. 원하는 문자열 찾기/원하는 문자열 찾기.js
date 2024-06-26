function solution(myString, pat) {
    var answer = 0;
    
    answer = +myString.toUpperCase().includes(pat.toUpperCase())
    return answer;
}