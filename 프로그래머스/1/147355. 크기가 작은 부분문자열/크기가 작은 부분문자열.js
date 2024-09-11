function solution(t, p) {
    var answer = 0;
    var len = p.length
    
    for(var i=0; i <= t.length - len; i++){
        if(t.slice(i, i+ len) <= p) answer+=1
    }
    return answer;
}