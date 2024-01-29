function solution(arr, n) {
    var answer = [];

    var i = !!(arr.length % 2) ? 0 : 1
    
    for(i; i < arr.length; i+=2){
        arr[i] += n
    } 

    answer = arr
    console.log(answer)
    return answer;
}

solution([49, 12, 100, 276, 33]	, 27)