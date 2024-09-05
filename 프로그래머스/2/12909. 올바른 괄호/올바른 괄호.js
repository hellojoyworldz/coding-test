function solution(s){
    var answer = true;
    
    if(s[0] === ")" || s[s.length -1] === "(") return false

    var num =0;
    for(var i=0; i < s.length;i++){
        if(s[i] === "("){
            num += 1
        }else{
            num -= 1
            if(num < 0){
                answer = false;
                break;
            }
        }
    }
    
    answer = num === 0 ? true: false

    
    return answer;
}