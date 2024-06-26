function solution(number, n, m) {
    var answer = 0;
    answer = number % n === 0 && number % m === 0 ? 1: 0
    // answer = !(number % n) && !(number % m) ? 1: 0

    console.log(answer)
    return answer
}
solution(10, 2, 10)


function solution2(number, n, m) {
    var answer = 0;
    answer = +!(number % n || number % m);

    console.log(answer)
    return answer
}
solution2(10, 2, 10)