function solution(arr, flag) {
    var answer = [];
    
    flag.map((val,idx) => {
        if(val === true) {
            for(var i=0; i < arr[idx] * 2; i++){
                answer.push(arr[idx])
            }
        }else if (val === false) {
            answer = answer.slice(0, answer.length- arr[idx] )
        }
    })
    return answer;
}