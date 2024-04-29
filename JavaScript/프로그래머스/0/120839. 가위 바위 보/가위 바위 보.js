function solution(rsp) {
    var answer = '';
    
    const point = {
        2: 0,
        0: 5,
        5: 2,
    }
    
    answer = [...rsp].map(val => point[val]).join("")
    return answer;
}

function solution3(rsp) {
    var answer = '';
    
    answer = [...rsp].map(val => (
       val === "2" ? 0 :
       val === "0" ? 5 :
       val === "5" ? 2 : ''
    )).join("")
    return answer;
}


function solution2(rsp) {
    var answer = '';
    
    [...rsp].map(val => {
       val === "2" ? answer+=0 :
       val === "0" ? answer+=5 :
       val === "5" ? answer+=2 : ''
    })
    return answer;
}