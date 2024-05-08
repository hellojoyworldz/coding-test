function solution(array, n) {
    var answer = 0;
    
    answer = array[0]
    var abs = Math.abs(array[0] - n)
    array.map((val,idx) => {
        if(abs === Math.abs(val - n)){
            answer = answer > val ? val : answer
        }else if(abs > Math.abs(val - n)){
            abs = Math.abs(val - n)
            answer = val
        }
        
    })
    
    return answer;
}