function solution(myString, pat) {
    var answer = '';
    
    answer = myString.slice(0,myString.lastIndexOf(pat) + pat.length)
    console.log(answer)
    
    return answer;
}