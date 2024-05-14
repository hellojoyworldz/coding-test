function solution(numbers, direction) {
    var answer = [];
    let num ;
    
    if(direction === 'right') {
        num = numbers.pop()
        numbers.unshift(num)    
    }else if(direction === 'left'){
        num = numbers.shift()
        numbers.push(num)       
    }
    
    answer = numbers

    return answer;
}