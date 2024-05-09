function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a,b) => a-b)
    
    let fir = numbers[0] * numbers[1]
    let lst = numbers[numbers.length-2] * numbers[numbers.length-1]
    
    answer = fir > lst ? fir : lst
    
    return answer;
}