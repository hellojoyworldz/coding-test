function solution(numbers) {
    var answer = 0;
    var arr = numbers.sort((a,b) => {
        return b-a
    })
    answer = arr[0] * arr[1]
    return answer;
}