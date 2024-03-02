function solution(arr) {
    var answer = [];
    

    answer = arr.includes(2) ? arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1) : [-1]

    return answer;
}