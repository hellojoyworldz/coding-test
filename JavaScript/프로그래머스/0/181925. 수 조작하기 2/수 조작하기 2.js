function solution(numLog) {
    var answer = '';
    
    numLog.reduce((acc,cur,idx) => {
        
        acc = numLog[idx+1] -cur
        
        switch(acc) {
            case 1 : 
                answer += 'w'
                break
            case -1 :
                answer += 's'
                break
            case 10 : 
                answer += 'd'
                break
            case -10 : 
                answer += 'a'
                break
            default : 
                break
        }
        
        
    },numLog[0])
    return answer;
}