function solution(array, commands) {
    var answer = [];
    commands.forEach(val => {
        const [i,j,k] = val
        answer.push(array.slice(i-1,j).sort((a,b) => a-b)[k-1])
    })
    
    return answer;
}