function solution(code) {
    var answer = '';
    var mode = 0;
    
    for(var idx=0; idx < code.length; idx++){
        if(mode === 0 && code[idx] !== "1" && idx%2 === 0) answer += code[idx]
        else if(mode === 0 && code[idx] === "1") mode = 1
        else if(mode === 1 && code[idx] !=="1" && idx%2 !== 0) answer += code[idx]
        else if(mode === 1 && code[idx] === "1") mode = 0
    }
    
    if(answer === "") answer =  "EMPTY"
    return answer;
}