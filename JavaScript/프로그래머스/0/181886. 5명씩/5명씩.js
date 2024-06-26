function solution(names) {
    var answer = [];
    
    names.map((item,index) => {
        if(index % 5 === 0) answer.push(item)
    })
    return answer;
}