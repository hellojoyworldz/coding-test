function solution(array) {
    var answer = 0;
    
    answer = array.sort((a,b) => a-b)[Math.floor(array.length/2)]
    return answer;
}