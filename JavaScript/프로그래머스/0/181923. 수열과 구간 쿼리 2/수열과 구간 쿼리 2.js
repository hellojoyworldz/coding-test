function solution(arr, queries) {
    var answer = [];
    
    queries.map(([s,e,k], idx) => {
        var prev = []

        for(var i=s; i <=e; i++) if(arr[i] > k) prev.push(arr[i]) 
        var val = prev.sort((a,b) => a-b)[0] 
        val === undefined ? answer.push(-1) : answer.push(val)
    })
    
    // answer = queries.map(([s,e,k]) => arr.slice(s,e+1).filter( (n) => n > k).sort((a,b) => a-b)[0] || -1)
    
     
    
    return answer;
}