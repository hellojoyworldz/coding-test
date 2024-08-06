function solution(price, money, count) {
    var answer = -1;
    
    var priceHap = 0;
    for(var i=1;i <=count;i++){
        priceHap += price*i
    }
    
    var cha = priceHap - money
    
    answer = cha > 0 ? cha : 0

    return answer;
}