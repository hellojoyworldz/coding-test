function solution(d, budget) {

    var answer = 0;
    var hap = 0;
    
    d.sort((a,b) => a-b).forEach(val => {
        hap += val
        
        if(hap <= budget) {
            answer+=1
        }
    })

    
    return answer;
}