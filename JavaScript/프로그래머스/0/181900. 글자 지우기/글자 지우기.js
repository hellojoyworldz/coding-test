function solution(my_string, indices) {
    var answer = '';
    arr = [...my_string]
    
    indices.map((val,idx) => {
        arr[val] = ''
        answer = arr.join('')
    })
    
    
    return answer;
}