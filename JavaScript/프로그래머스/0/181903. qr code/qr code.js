function solution(q, r, code) {
    var answer = '';
    
    code.split("").map((val,idx) => { if(idx%q === r)answer += val})
    return answer;
}