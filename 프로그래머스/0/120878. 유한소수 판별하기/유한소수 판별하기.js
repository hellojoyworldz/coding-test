function solution(a, b) {
    var answer = 0;
    var max = 1;
    
    if(a === b) return 2;
    if(a % b === 0) return 1;
    
    
    for(var i=1; i <= Math.min(a,b); i++){
        if(a%i === 0 && b%i === 0){
            max = i;
        }
    }
    
    a /= max
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