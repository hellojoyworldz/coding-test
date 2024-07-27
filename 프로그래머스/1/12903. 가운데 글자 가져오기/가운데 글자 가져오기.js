function solution(s) {
    var answer = '';
    var len = s.length;
    if(len % 2 !== 0){
        answer = s[(len -1) /2]
    }else{
        for(var i=len/2 -1; i <= len/2; i++){
            answer +=  s[i]
        }
    }
    return answer;
}