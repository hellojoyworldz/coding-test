function solution(my_string) {
    var answer = 0;
    
    var ary = my_string.split(" ")
    
    ary.map((val, idx) => {
        if(idx === 0){
            answer = Number(val)
        }if(idx % 2 !== 0){
            val === "+" ? answer+= Number(ary[idx+1]) : answer-= Number(ary[idx+1])
        }
    })
    
    return answer;
}