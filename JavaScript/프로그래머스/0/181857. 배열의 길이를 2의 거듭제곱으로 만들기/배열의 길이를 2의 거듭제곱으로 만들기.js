function solution(arr) {
    var answer = [];
    var len = arr.length;
    var num = 0;
    
    while(Math.pow(2,num) < len) num++
    for(var i=0; i < 2**num-len ;i++) arr.push(0)

    answer = arr
    return answer;
}