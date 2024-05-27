function solution(array) {
    var answer = 0;
    
    array.join("").split("").map(val => {
        if(val === '7') answer++ 
    })
    return answer;
}