function solution(quiz) {
    var answer = [];
    let ary = []
    let result = 0;
    quiz.map(val => {
        
        ary = val.split(" ")
        result = ary[1] === "+" 
        ? Number(ary[0]) + Number(ary[2]) 
        : Number(ary[0]) - Number(ary[2])
        
        result === Number(ary[4]) ? answer.push("O") : answer.push("X")
        
    })
    return answer;
}