function solution(n) {
    var answer = 0;
    answer = Number.isInteger(Math.sqrt(n)) === true ? 1 : 2
    // answer = Math.sqrt(n) % 1 === 0 ? 1: 2
    // answer = Math.sqrt(n) % 1 ? 2 : 1
    // answer = Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2

    console.log(answer)
    console.log( !!(Math.sqrt(n) % 1))
    return answer;
}
solution(144)

function solution2(n) {
    var answer = 0;

    for(var i=0; i*i <= n; i++){
        answer = i*i === n ? 1 : 2
    }

    console.log(answer)
    return answer;
}
solution2(144)



/**
 * Math.sqrt()
 */