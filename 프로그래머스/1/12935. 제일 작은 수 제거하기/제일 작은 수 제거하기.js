function solution(arr) {
    var answer = [];
    
    if(arr.length === 1) {
        answer = [-1]
    }else{
        var min = Math.min(...arr)
        answer = arr.filter(val => val !== min)
    }
    
    return answer
}