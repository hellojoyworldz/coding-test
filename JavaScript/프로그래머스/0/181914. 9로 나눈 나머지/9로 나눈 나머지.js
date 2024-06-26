function solution(number) {
    var answer = 0;
    answer = number.split('').reduce((acc, cur) => Number(acc) + Number(cur)) % 9
    

    return answer;
}