function solution(order) {
    var answer = 0;
    
    order.toString().split("").map(val => {
        if(val === "3" || val === "6" || val === "9") answer++
    })
    return answer;
}