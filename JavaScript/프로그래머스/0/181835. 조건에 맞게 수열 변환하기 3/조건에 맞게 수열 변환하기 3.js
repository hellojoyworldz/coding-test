function solution(arr, k) {
    var answer = [];

    
    arr.map((a) => {
        answer.push(k%2 ? a*k : a+k)
    })
    
    return answer;
}