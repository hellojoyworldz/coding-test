function solution(n) {
    var answer = 0;
    answer = 1
    
    while(true){
        if((6 * answer) % n === 0) {
            break
        }
        answer++
    }
    
    return answer;
}