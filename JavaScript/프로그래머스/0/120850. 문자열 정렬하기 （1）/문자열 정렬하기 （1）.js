function solution(my_string) {
    var answer = [];

    answer = my_string.split("").filter((val) => isNaN(val) === false).map(val => Number(val)).sort()
    return answer;
}