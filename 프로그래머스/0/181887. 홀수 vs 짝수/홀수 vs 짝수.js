function solution(num_list) {
    var answer = 0;
    
    var odd = 0;
    var even = 0;
    
    num_list.map((val, idx) => {
        (idx+1) % 2 === 0 ? odd+=val : even+=val
    })
    
    answer = odd > even ? odd : even
    return answer;
}