function solution(s) {
    var answer = '';
    var idx = 0
    
    for(var word of s){
        if(word === " "){
          idx = -1 
        }
        
        if(idx === 0 && isNaN(word)){
            answer += word.toUpperCase()
        }else{
            answer += word.toLowerCase()
        }
        idx++
    }
    
    console.log(answer)
    return answer;
}
