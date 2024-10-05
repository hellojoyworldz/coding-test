function solution(common) {
    var answer = 0;
    
    var cha =[]
    
    for(var idx=0; idx <=2;idx++){
        if(idx !== 0) {
            cha.push(common[idx] - common[idx-1])
        }
    }
    
    var last = common[common.length-1]
    var [ x,y ] = cha
    
    answer =   y- x === 0 ? last + x :  last * (y / x)
    return answer;
}