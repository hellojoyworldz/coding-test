function solution(my_string) {
    var answer = '';
    
    my_string.split("").filter(val => {
        answer += val < "a" ? val.toLowerCase() : val.toUpperCase()
    })
    return answer;
}