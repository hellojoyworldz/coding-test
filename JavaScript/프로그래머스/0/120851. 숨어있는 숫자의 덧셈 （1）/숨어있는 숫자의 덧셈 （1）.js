function solution(my_string) {
    var answer = 0;
    
    answer = my_string.split("").reduce((acc,val) =>  acc += Number(val) ?  Number(val) : 0, 0)
    
    
    return answer;
}