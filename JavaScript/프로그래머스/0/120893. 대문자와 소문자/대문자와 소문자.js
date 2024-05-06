function solution(my_string) {
    var answer = '';
    
   for(let i=0; i < my_string.length;i++){
       answer += my_string.charCodeAt(i) < 97 ? my_string[i].toLowerCase() : my_string[i].toUpperCase()
   }
    return answer;
}


function solution2(my_string) {
    var answer = '';
    
    answer = my_string.split("").map((val,idx) => {
        return val.charCodeAt() < 97 ? val.toLowerCase() : val.toUpperCase()
    }).join("")
    return answer;
}


function solution3(my_string) {
    var answer = '';
    
    for(let val of my_string){
        answer += val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
    }  
    return answer;
}

function solution4(my_string) {
    var answer = '';
    
    my_string.split("").filter(val => {
        answer += val < "a" ? val.toLowerCase() : val.toUpperCase()
    })
    return answer;
}