function solution(arr, queries) {
    var answer = []
    answer = arr
    
    queries.map(([s,e]) => {
        for(var i=s; i <= e; i++) answer[i]++
    })
    return answer;
}
solution([0, 1, 2, 3, 4],[[0, 1],[1, 2],[2, 3]])


function solution2(arr, queries) {
    var answer = []

    queries.forEach(([s,e]) => {
        while(s <= e) arr[s++]++
    })

    answer = arr;
    return answer;
}
solution2([0, 1, 2, 3, 4],[[0, 1],[1, 2],[2, 3]])

