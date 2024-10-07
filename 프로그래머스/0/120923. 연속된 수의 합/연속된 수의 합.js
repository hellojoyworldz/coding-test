function solution(num, total) {
    var answer = [];
    var remainder = total % num
    var quotient = Math.ceil(total / num)
    var halfFloor = Math.floor(num/2)
    
    if(remainder === 0){
        for(var i=quotient-halfFloor;  i<=quotient+halfFloor; i++){
            answer.push(i)
        }
    }else{
        for(var i=quotient-remainder; i<quotient+remainder; i++){
            answer.push(i)
        }
    }
    
    return answer;
}