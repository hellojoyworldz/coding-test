function solution(rsp) {
    var answer = '';
    
    [...rsp].map(val => {
       val === "2" ? answer+=0 :
       val === "0" ? answer+=5 :
       val === "5" ? answer+=2 : ''
    })
    return answer;
}