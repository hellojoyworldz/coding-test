function solution(array) {
    var answer = [];
    
    var sortArray = new Array(...array)
    sortArray.sort((a,b) => b-a)
    array.forEach((val, idx) => {
        if(val === sortArray[0]) {
            answer.push(val)
            answer.push(idx)
        }
    })
  
    return answer;
}