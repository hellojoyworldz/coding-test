function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {
        answer.push(num_list.splice(0,n));
    }

    return answer;
}



function solution2(num_list, n) {
    var answer = [[]];
    
    for(var i=0; i < num_list.length/n; i++){
        answer[i] = num_list.slice(n*i, n*i+n)
    }
    return answer;
}