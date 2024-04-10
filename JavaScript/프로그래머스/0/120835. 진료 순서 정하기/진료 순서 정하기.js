function solution(emergency) {
    var answer = [];
    
    let sorted = emergency.slice().sort((a,b) => b-a)
    answer = emergency.map(v => sorted.indexOf(v)+1)
    

    return answer;
}