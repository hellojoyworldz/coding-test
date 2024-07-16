function solution(absolutes, signs) {
    var answer = 123456789;
    answer = 0
    absolutes.forEach((val,idx) => {
        if(!signs[idx]) answer += (val * -1)
        else answer += val
    })
    return answer;
}