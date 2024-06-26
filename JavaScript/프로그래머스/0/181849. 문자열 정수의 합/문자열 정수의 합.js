function solution(num_str) {
    var answer = 0;
    
    for(let num of num_str){
        answer += Number(num)
    }
    console.log(answer)
    return answer;
}

solution("123456789") 