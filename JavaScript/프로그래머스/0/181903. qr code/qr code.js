function solution(q, r, code) {
    var answer = '';
    
    // code.split("").map((val,idx) => { if(idx%q === r)answer += val})
    answer = [...code].filter((val,idx) => idx%q === r).join('')
    
    return answer;
}