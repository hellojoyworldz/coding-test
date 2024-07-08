function solution(arr) {
    var answer = 0;
    var hap = 0;
    arr.forEach(val => {
        hap += val
    })
    
    answer = hap / arr.length
    return answer;
}