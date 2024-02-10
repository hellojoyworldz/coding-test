function solution(myString) {
    var answer = '';
    
    // answer = myString.toLowerCase().replaceAll("a","A")
    
    for(let v of myString){
        if( v === 'a' || v === 'A') answer += "A"
        else answer += v.toLowerCase()
    }
    
    
    return answer;
}