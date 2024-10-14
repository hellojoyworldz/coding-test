function solution(a, b, n) {
    var answer = 0;
    
    var bottle = n
    var na = 0;
    
    while(bottle > 0){
        na += bottle % a 
        bottle = Math.floor(bottle/a) * b
        console.log(bottle + "/" + na)
        answer += bottle   
        
        if(na >= a){
             bottle += na
             na = 0
        }
    }
    

    
    return answer;
}