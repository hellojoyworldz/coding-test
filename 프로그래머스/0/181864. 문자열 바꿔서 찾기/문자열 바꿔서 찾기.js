function solution(myString, pat) {
    var answer = 0;
    var words = ''
    
    for(let v of myString){
        if(v === "A") words += "B"
        else if(v === "B") words += "A"
    }
    
    answer = +words.includes(pat)
   
    return answer;
}

solution("ABBAA", "AABB")