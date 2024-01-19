function solution(n) {
    var answer = 0;

    if (n % 2 !==0) {
        for(var i=1; i <= n; i++) if(i % 2 !==0) answer+=i
    }else{
        for(var i=1; i <= n; i++) if(i % 2 ===0) answer+=i*i
    }
    
    console.log(answer)
    return answer;
}
solution(10)

function solution2(n) {
    var answer = 0;

    answer = n%2===1 ? (n+1)/2*((n+1)/2) : n*(n+1)*(n+2)/6
    
    console.log(answer)
    return answer;
}
solution2(10)