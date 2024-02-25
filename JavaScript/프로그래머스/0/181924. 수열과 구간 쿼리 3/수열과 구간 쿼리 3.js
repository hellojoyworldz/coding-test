function solution(arr, queries) {
    var answer = [];
    
    /*
    queries.map(([i,j]) => {
        answer[i] = arr[i]
        answer[j] = arr[j]
        arr[i] = answer[j]
        arr[j] = answer[i]
    })
    */
    
    queries.map(([i,j]) => [arr[i],arr[j]] = [arr[j],arr[i]])
    
    answer = arr
    return answer;
}

