function solution(my_string, num1, num2) {
    var answer = '';
    
    answer = my_string.split("").map((val,idx) => {
        if(idx === num1) return my_string[num2]
        else if(idx === num2) return my_string[num1]
        else return val
    })
    
    answer = answer.join("")
    return answer;
}