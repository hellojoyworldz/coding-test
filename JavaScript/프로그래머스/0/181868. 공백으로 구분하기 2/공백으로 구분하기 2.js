function solution(my_string) {
    var answer = [];
    
    // my_string.split(" ").map(a => {if(a !== '') answer.push(a)})
    // answer = my_string.trim().split(/\s+/)
    answer = my_string.split(' ').filter(v=>v)
    
    return answer;
}