function solution(balls, share) {
    var answer = 0;
    
    var den = 1;
    var num = 1;
    
    for(let n=1;n <=balls;n++){
        den *= n
    }
    
    for(let i=1; i <=balls-share; i++){
        num *= i
    }
    
    for(let m=1; m <= share; m++){
        num *= m
    }
    
    answer = Math.round(den/num)
    return answer;
}