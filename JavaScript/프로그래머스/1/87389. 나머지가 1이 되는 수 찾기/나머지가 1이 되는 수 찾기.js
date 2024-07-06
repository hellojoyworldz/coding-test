function solution(n) {
    var answer = 0;
    
    var i =1
    while(i++){
        if(n % i === 1){
            answer = i
            break
        }
    }
    return answer;
}