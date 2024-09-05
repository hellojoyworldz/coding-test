function solution(s){
    var answer = true;
    
    if(s[0] === ")" || s[s.length -1] === "(") return false

    var num =0;
    for(var txt of s){
        num += txt === "(" ? 1 : -1
        if(num <0) return false
    }

    answer = num === 0 ? true: false
    return answer;
}