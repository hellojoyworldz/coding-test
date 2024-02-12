function solution(strArr) {
    var answer = [];
    
    answer = strArr.filter((v) => !v.includes('ad'))
    return answer;
}