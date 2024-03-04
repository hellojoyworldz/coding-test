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

function solution2(arr) {
    var answer = 0;
    var copy = []

    let red  = [3,4,3]

    while(!arr.every((v,i) => v === copy[i])){
        copy = [...arr]
        arr = arr.map(val => {
            if(val >= 50 && val % 2 === 0) return val / 2
            else if(val < 50 && val % 2 !== 0) return val * 2 + 1
            else return val
        })
        
        answer ++
        
    }

    console.log(answer-1)
    return answer-1
}

solution2([1, 2, 3, 100, 99, 98])