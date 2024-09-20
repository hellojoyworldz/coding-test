function solution(s) {
    var answer = [];
    
    
    for(var i=0; i < s.length; i++){
        
        if(i === 0) answer.push(-1)
        
        for(var j= i-1; j > -1; j--){
            if(s[i] === s[j]){
                answer.push(i-j);
                break
            }else if(j === 0){
                answer.push(-1)
            }
        } 
        
    }
    return answer;
}