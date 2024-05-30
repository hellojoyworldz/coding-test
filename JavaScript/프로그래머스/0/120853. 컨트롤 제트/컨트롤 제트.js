function solution(s) {
    var answer = 0;
    
    s.split(" ").map((val,idx, ary) => {
        if(val === "Z") {
            answer -= Number(ary[idx-1])
        }else{
            answer += Number(val)
        }
    })
    return answer;
}