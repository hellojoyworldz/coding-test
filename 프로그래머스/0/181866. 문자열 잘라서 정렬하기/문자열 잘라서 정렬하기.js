function solution(myString) {
    var answer = [];
    
    answer = myString.split('x').filter(val => val !== '' ).sort()
    return answer;
}