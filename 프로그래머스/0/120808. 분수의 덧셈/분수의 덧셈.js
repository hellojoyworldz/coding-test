function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var ary = []
    
    let numer = numer1 * denom2 + numer2 * denom1
    let denom = denom1 * denom2
    
    
    for(var i=2; i <= Math.min(numer, denom); i++){
        if(numer % i ===0 && denom %i ===0){
            ary.push(i)
        }
    }
    
    let len = ary.length
    if(ary.length === 0){
        answer = [numer, denom]
    }else{
        answer = [numer/ary[len-1], denom/ary[len-1]]
    }
 
    
    return answer;
}

