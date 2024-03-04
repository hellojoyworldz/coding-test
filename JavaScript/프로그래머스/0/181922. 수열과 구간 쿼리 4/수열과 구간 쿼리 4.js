function solution(arr, queries) {
    var answer = [];
    
    queries.map(([s,e,k]) => {for(var i=s; i<=e; i++)if(i%k === 0) arr[i]+=1})
    answer = arr
    
    return answer;
}