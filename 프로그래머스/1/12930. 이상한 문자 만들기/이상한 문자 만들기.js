function solution(s) {
    var answer = '';
    
    s.split(" ").forEach((val,idx) =>{
        if(idx !== 0) answer+= " "
        
        for(var i=0; i < val.length; i++){
            answer+= i %  2 === 0 ? val[i].toUpperCase() : val[i].toLowerCase()
        }
    
    })
    return answer;
}