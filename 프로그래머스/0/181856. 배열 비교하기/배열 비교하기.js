function solution(arr1, arr2) {
    var answer = 0;
    var sum1 = 0;
    var sum2 = 0;
    arr1.forEach(v => sum1+=v) 
    arr2.forEach(v => sum2+=v)
    
    if(arr1.length === arr2.length){
        if(sum1 === sum2){
            answer = 0;
        }else if(sum1 < sum2){
            answer = -1;
        }else if(sum1 > sum2){
            answer = 1;
        }
    }else if(arr1.length < arr2.length){
        answer = -1
    }else if(arr1.length > arr2.length){
        answer = 1
    }
    
    
    return answer;
}