function solution(flo) {
    var answer = 0;
    answer = Math.floor(flo)
    // answer = Math.floor(Math.abs(flo))
    // answer = Math.trunc(flo)
    // answer = parseInt(flo, 10)
    // answer = parseInt(flo/1)
    // answer = ~~flo 
    // answer = flo >> 0
    // answer = Number(String(flo).split('.')[0])
    
    console.log(answer)
    return answer;
}
solution(69.32)
