function solution(num, k) {
    var answer = 0;
    
    answer = num.toString().indexOf(k)+1 || -1

    return answer;
}

function solution2(num, k) {
    var answer = 0;
    
    answer = num.toString().indexOf(k)
    if(answer !== -1) answer += 1

    return answer;
}