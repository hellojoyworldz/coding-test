function solution(l, r) {
    var answer = [];
    
    for(var i=l;i<=r;i++){
        var str = i.toString()
        var count = 0;
        for(var j=0; j < str.length ;j++){
            if(str[j] === "0" || str[j] === "5") count++
            if(count === str.length) answer.push(Number(str))
        }
    }
        
    if(answer.length === 0 ) answer.push(-1)
    return answer;
}


function solution2(l, r) {
    var answer = [];
    
    for(var i=l;i<=r;i++){
        if(i.toString().split("").every(e => e ==="5" || e==="0")) answer.push(i)
    }
        
    if(answer.length === 0 ) answer.push(-1)
    return answer;
}