function solution(box, n) {
    var answer = 0;
    
    answer = box.reduce((acc, v) => (
        Math.trunc(v / n) * acc
    ),1)
    return answer
}




function solution3(box, n) {
    var answer = 0;
    
    let [width, length, height] = box
    
    answer = Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n) 
    return answer
}


function solution2(box, n) {
    var answer = 0;
    
    box.map(val => {
        if(answer === 0) answer += Math.trunc(val/n)
        else answer *= Math.trunc(val/n)
    })
    return answer;
}