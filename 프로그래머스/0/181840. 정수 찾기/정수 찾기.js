function solution(num_list, n) {
    var answer = 0;
    
    for(var num of num_list){
        if( num === n ) {
            answer = 1; 
            break
        }
    }

    console.log(answer)
    return answer;
}

solution([1,2,3,4,5],5)