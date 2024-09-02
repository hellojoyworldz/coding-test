function solution(n) {
    var answer = 0;
    var ary = []

    while(ary.length < n){    
        answer++    
        if(answer%3 === 0 || answer.toString().includes("3")){
            answer++
             while(answer%3 === 0 || answer.toString().includes("3")){
                answer++
            }
        }
        ary.push(answer) 
    }
    
    
    return answer;
}