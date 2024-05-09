function solution(arr, query) {
    var answer = [];
    
    query.map((val, i) => {
        if(i % 2 === 0) arr.splice(val+1)
        else arr.splice(0,val)
    })
    
    answer = arr

    return answer;
}