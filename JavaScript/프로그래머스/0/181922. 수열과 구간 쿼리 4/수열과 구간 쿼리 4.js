function solution(arr, queries) {
    var answer = [];

    // queries.map(([s,e,k]) => {for(var i=s; i <=e;i++) if(i%k === 0) arr[i] += 1})
    queries.map(([s,e,k]) => {
        for(; s<=e;s++) {
            !(s%k) && arr[s]++
        }
    })

    console.log(arr)
    answer = arr
    return answer;
}

solution([0, 1, 2, 4, 3],	[[0, 4, 1],[0, 3, 2],[0, 3, 3]])
