function solution(num_list, n) {
    var answer = [];
    
    // answer = num_list.filter((v,idx) => idx % n === 0 )
    num_list.map((v,i) => {
        if(i % n === 0) answer.push(v)
    })

    console.log(answer)
    return answer;
}

solution([4, 2, 6, 1, 7, 6]	, 2) 
