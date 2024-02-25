function solution(myString, pat) {
    var answer = 0;
    
    for(var i=0; i < myString.length ;i++){
        myString.slice(i,i+pat.length)  === pat ? answer +=1 : answer += 0
    }
    return answer;
}