function solution(d, budget) {
    var ary = d.sort((a,b) => a-b)
    var answer = 0;
    var hap = 0;
    
    for(var i=0; i < ary.length;i++){
        hap += ary[i]
        
        if(hap <= budget){
            answer+=1
        }else if(hap > budget){
            hap -=ary[i]
        }
        
    }
    

    
    return answer;
}