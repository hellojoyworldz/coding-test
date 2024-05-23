function solution(i, j, k) {
    var answer = 0;
    
    for(var num=i; num <= j; num++){
        num.toString().split("").map(val => {
            if(val === k.toString()) answer++
        })
    }
    return answer;
}