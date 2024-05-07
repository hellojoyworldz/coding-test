function solution(n) {
    var answer = 0;
    answer = n.toString().split("").reduce((acc, cur) =>  acc+Number(cur),0)
    return answer;
}

function solution2(n) {
    var answer = 0;
    let num = n.toString()
    for(let i=0; i < num.length ;i++) {
        answer += Number(num[i])
    }
    return answer;
}