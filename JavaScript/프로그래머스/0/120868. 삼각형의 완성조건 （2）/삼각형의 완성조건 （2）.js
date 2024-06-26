function solution(sides) {
    var answer = 0;
    var hap = 0;
    sides.sort((a,b) => a-b)
    sides.forEach(val => hap+= val)
    
    for(var j=sides[1]-sides[0]+1 ; j <= sides[1] ;j++){
        answer += 1
    }
    
    for(var i=sides[1]+1; i < hap;i++){
        answer += 1
    }


    
    return answer;
}