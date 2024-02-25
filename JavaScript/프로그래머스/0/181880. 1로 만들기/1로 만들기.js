function solution(num_list) {
    var answer = 0;
    
    num_list.map((val) => {
        while(val > 1){
            val = val % 2 === 0 ? val / 2 : (val -1) / 2
            answer++
        }
    })
    
    
    return answer;
}