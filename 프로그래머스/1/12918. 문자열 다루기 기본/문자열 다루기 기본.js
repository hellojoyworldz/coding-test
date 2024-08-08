function solution(s) {
    var answer = true;
    
    var len = s.length
    
    if(len === 4 || len === 6){
        for(var i=0;i <len ;i++){
            if(isNaN(s[i]) ){
                answer = false;
                break;
            }
        }
    }else{
        answer = false
    }
    
    return answer;
}