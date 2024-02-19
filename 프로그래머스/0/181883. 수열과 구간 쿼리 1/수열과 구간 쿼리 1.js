function solution(arr, queries) {
    var answer = [];
    
    queries.map((val, idx) => {
        var s = val[0]
        var e = val[1]
        
        for(let i=s; i <= e; i++){
            arr[i] += 1
        }
    })
    
    answer = arr
        

    
    
    
    return answer;
}