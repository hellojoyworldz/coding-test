function solution(a, b) {
    var answer = 0;
    
    if(a % b === 0) return 1;
    
    var max = 1;
    for(var i=1; i <= Math.min(a,b); i++){
        if(a%i === 0 && b%i === 0) max = i;
    }
    
    b /= max
    
    while(b % 2 === 0) b/=2
    while(b % 5 === 0) b/=5

    answer = b === 1 ? 1 : 2
    return answer
}

function solution2(a, b) {
    var answer = 0;
    var max = 1;
    
    if(a % b === 0) return 1;
    
    for(var i=1; i <= Math.min(a,b); i++){
        if(a%i === 0 && b%i === 0){
            max = i;
        }
    }
    
    b /= max
    
    while(true){
        if(b %2 === 0 ){
            b /= 2
        }else if(b % 5 === 0){
            b /=5
        }else{
            answer=2;
            break
        }
        
        if(b === 1){
            answer=1;
            break;
        }
    }
    
     return answer  
}