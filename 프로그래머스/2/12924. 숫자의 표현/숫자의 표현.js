function solution(n) {
    var answer = 0;
    
    
    for(var i=1; i <=n; i++){
        var hap = 0;
        
        for(var j=i; j<=n; j++){
            hap+=j
            if(hap > n) break
            if(hap === n) answer+=1
            
        }    
    }
    
    
    return answer;
}