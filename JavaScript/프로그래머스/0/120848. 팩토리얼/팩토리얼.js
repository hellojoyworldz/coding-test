function solution(n) {
    var answer = 0;
    
    var factorial = 1;
    while(factorial <= n){   
        factorial *= ++answer
    }
    
    if(factorial !==n || Math.abs(factorial-n) > Math.abs((factorial/answer)-n)) answer = answer-1

    return answer;
}