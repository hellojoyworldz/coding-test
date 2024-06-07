function solution(s){
 var answer = true;
    var i = 0;
    var j = 0;

    s.toLowerCase().split("").map(val => {
        if(val === "p") i++
        else if(val === "y") j++
    })

    answer =  (i === j) ? true:false 
     return answer;
}