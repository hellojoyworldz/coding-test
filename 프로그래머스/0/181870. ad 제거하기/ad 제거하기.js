function solution(strArr) {
    var answer = [];
    
    //answer = strArr.filter((v) => !v.includes('ad'))
    answer = strArr.filter((v) => v.indexOf("ad") === -1)
    return answer;
}