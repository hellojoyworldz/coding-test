function solution(n) {
    var answer = [];
    for(var i = 1; i <= n; i++) i%2 !== 0 ? answer.push(i) : ''

    console.log(answer)
    return answer;
}
solution(15)

function solution2(n) {
    var answer = [];
    for(var i = 1; i <= n; i+=2) answer.push(i)

    console.log(answer)
    return answer;
}
solution2(15)