function solution(my_string, k) {
    var answer = '';
    for(var i = 1; i <= k; i++) {
        answer += my_string
    }
    console.log(answer)
    return answer;
}

solution('string',3)

function solution2(my_string, k) {
    var answer = '';
    answer = my_string.repeat(k)
    
    console.log(answer)
    return answer;
}

solution2('string',3)