function solution(num_list) {
    var answer = 0;
    var odd = '';
    var even = '';
    for (num of num_list){
        num % 2 ? odd+=num : even+=num
        answer = Number(odd) + Number(even)
    }
    return answer;
}

solution([3,4,5,2,1])