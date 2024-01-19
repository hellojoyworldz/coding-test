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