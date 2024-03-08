function solution(arr, k) {
    var answer = [];
    
    for(var i=0; i < arr.length; i++){
        if(!answer.includes(arr[i]) && answer.length <k) answer.push(arr[i]) 
        else if(answer.length === k) break
    }

    while(answer.length < k) answer.push(-1)
 
    
    return answer;
}