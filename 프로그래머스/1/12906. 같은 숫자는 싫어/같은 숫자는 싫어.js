function solution(arr){
    var answer = [];
    
    arr.forEach((value, idx) => {        
        if(value !== arr[idx+1]){
            answer.push(value)
        }
    })

    
    
    return answer;
}