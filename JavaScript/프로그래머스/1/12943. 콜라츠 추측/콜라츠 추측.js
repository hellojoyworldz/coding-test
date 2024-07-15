function solution(num) {
    var answer = 0;
    var i = num;
    while(i !== 1){
        if(i % 2 === 0) i = i / 2
        else i = i * 3 + 1

        answer++
        if(answer >=500){
            answer = -1;
            break
        }
    }
    return answer;
}