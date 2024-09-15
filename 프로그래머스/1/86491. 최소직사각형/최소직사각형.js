function solution(sizes) {
    var answer = 0;
    var a = []
    var b = []
    
    sizes.map(val => val.sort((a,b) => a-b)).forEach(val =>{
        a.push(val[0])
        b.push(val[1])
    })
    
    answer = Math.max(...a) * Math.max(...b)
    return answer;
}