function solution(myString) {
    var answer = '';
    let alphabet = 'abcdefghijklmnopqrxtuvwxyz'

    myString.split('').map((v) => {
        v < 'l' ? answer += 'l' : answer +=v
    })
    
    return answer;
}