function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.map((val) => {if(val.slice(s,s+l) > k) answer.push(Number(val.slice(s,s+l)))})
    answer = intStrs.map((val) => Number(val.slice(s,s+l))).filter((val) => val > k)
    answer = intStrs.map((val) => +val.substring(s,s+l)).filter((val) => val > k)
    
    return answer;
}