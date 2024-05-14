
function solution(numbers, direction) {
    var answer = [];
    
    answer = direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
    
    return answer;
}



function solution2(numbers, direction) {
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