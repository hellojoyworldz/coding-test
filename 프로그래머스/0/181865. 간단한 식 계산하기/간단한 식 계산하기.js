function solution(binomial) {
    var answer = 0;
  
    let res = binomial.split(" ")
    let a = Number(res[0])
    let b = Number(res[2])
  
    if(res[1] === '+') answer = a + b
    else if(res[1] === '-') answer = a - b
    else if(res[1] === '*') answer = a * b

    return answer;
}

solution("43 + 12")