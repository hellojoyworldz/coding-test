function solution(A,B){
    var answer = 0;

    let aryA = A.sort((a,b) => a-b)
    let aryB = B.sort((a,b) => a-b)
    let len = aryA.length-1
    
    for(var i=0; i <=len; i++){
        answer += aryA[i] * aryB[len - i]
    }
    

    return answer;
}