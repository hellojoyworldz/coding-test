function solution(myString) {
    var answer = '';
    
    answer = myString.toLowerCase().replaceAll("a","A")
    return answer;
}

function solution2(myString) {
    var answer = '';

    for(let v of myString){
        if( v === 'a' || v === 'A') answer += "A"
        else answer += v.toLowerCase()
    }   
    return answer;
}