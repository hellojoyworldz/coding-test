function solution(my_string) {
    var answer = '';
    
    my_string.split("").map((val, idx) => {
        if(my_string.indexOf(val) === idx) answer += val
    })
    return answer;
}