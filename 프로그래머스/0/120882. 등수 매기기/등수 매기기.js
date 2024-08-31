function solution(score) {
    var answer = [];
    var obj = {}
    
    var avg = score.map(val =>  (val[0] + val[1]) / 2)
    for(var i=0; i < avg.length ;i++){
        var rank = 1;
        for(var j=0; j< avg.length; j++){
            if(avg[i] < avg[j]){
                rank++
            }else if(avg[i] === avg[j]){
                continue;
            }
        }
        answer.push(rank)
    }
    
    
    
        
    return answer;
}