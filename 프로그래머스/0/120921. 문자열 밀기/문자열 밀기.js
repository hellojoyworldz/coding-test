function solution(A, B) {
    var answer = 0;
    
    var len = A.length ;
    if(A === B) answer = 0;
    else if(A !== B){
        answer = -1
        for(var i=1; i <= len; i++){
            var txt =  A.slice(len-i, len)+  A.slice(0, len-i) 
            console.log(txt)
            if(txt === B) {
                answer = i;
                break;
            } 
        }
    }
    
    
    
    
  
    
    
    return answer;
}