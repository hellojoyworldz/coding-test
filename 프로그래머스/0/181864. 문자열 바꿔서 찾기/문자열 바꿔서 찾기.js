function solution(myString, pat) {
    var answer = 0;
    var words = ''
    
    for(let v of myString){
        if(v === "A") words += "B"
        else if(v === "B") words += "A"
    }
    
    answer = +words.includes(pat)
    console.log(answer)
   
    return answer;
}

solution("ABBAA", "AABB")

function solution2(myString, pat) {
    var answer = 0;
    
    // answer = [...myString].map(v => v === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0
    // answer = myString.split("").map((v) => v === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0
    answer = +[...myString].reduce((prev, char) => {
        console.log(prev)
        console.log(char)
        return prev + (char === "A" ? "B" : "A")
    },"").includes(pat) 

    console.log(answer)
    return answer;
}

solution2("ABBAA", "AABB")