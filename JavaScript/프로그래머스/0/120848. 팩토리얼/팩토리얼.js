function solution(n) {
    var answer = 0;
    
    var factorial = 1;
    while(true){   
        factorial *= ++answer
        if(factorial >= n) break;
    }
    
    if(factorial !==n || Math.abs(factorial-n) > Math.abs((factorial/answer)-n)) answer = answer-1

    return answer;
}