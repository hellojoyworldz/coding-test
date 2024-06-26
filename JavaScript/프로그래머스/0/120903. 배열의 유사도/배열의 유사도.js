function solution(s1, s2) {
    var answer = 0;
    answer = s1.filter((v) => s2.includes(v)).length
    console.log(answer)
    return answer;
}
solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])

function solution2(s1, s2) {
    var answer = 0;
    for(let v of s1) s2.includes(v) ? answer++ : ''
    console.log(answer)
    return answer;
}
solution2(["a", "b", "c"], ["com", "b", "d", "p", "c"])

function solution3(s1, s2) {
    var answer = 0;
    var concat = [...s1, ...s2];
    var setConcat = Array.from(new Set(concat))
    answer = concat.length - setConcat.length
    // var setConcat = new Set(concat)
    // answer = concat.length - setConcat.size

    console.log(concat, setConcat)
    console.log(answer)
    return answer;
}
solution3(["a", "b", "c"], ["com", "b", "d", "p", "c"])

/**
 * filter(), includes()
 * for ... of
 * new Set(), Array.from(), size
 */