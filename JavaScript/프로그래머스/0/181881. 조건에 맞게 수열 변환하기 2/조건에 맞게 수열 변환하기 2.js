function solution(arr) {
    var answer = 0;
    
    while(true){
        var copy = [...arr]
        arr.map((val, idx) => {
            if(val >= 50 && val % 2 === 0) arr[idx] = arr[idx]/2
            else if(val < 50 && val % 2 !== 0) arr[idx] = arr[idx]*2 + 1
        })
        
        if(JSON.stringify(copy) === JSON.stringify(arr)) break
        answer++

    }
    
    return answer
}