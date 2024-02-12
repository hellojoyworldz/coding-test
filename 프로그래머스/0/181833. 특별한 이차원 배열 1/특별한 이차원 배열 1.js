function solution(n) {
    var answer = [[]];
    
    answer = []
    for(let i=0; i < n; i++){
        let cell = []
        
        for(let j=0; j < n; j++){

            if(i === j) cell.push(1)
            else cell.push(0)
        }
        answer.push(cell)
    }

    
    return answer;
}