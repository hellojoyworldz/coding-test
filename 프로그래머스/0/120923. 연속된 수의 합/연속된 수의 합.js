function solution(num, total) {
    var answer = [];
    var na = total % num
    var mo = Math.ceil(total / num)
    var ea = Math.floor(num/2)
    
    if(na === 0){
        for(var i=mo-ea;  i<=mo+ea; i++){
            answer.push(i)
        }
    }else{
        for(var i=mo-na; i<na+mo; i++){
            answer.push(i)
        }
    }
    
    return answer;
}