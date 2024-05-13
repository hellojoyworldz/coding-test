function solution(my_string) {
    var answer = '';
 
    answer = Array.from(my_string).filter((val) => !["a","e","i","o","u"].includes(val)).join("")
    
    return answer;
}


function solution2(my_string) {
    var answer = '';
 
    answer = my_string.split("").filter((val) => {
        if(val !== "a" && val !== "e" && val !== "i" && val !== "o" && val !== "u") return val
    }).join("")
    
    return answer;
}


