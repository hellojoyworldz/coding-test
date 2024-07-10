function solution(x) {
    var answer = true;
    var hap = 0;
    
    x.toString().split("").forEach(val => {
        hap += Number(val)
    })

    if(!(x % hap === 0) ) answer = false
    return answer;
}