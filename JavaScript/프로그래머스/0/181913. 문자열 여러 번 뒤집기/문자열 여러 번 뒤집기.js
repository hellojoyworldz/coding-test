function solution(my_string, queries) {
    var answer = '';
    
    queries.map(([s,e]) => {
        my_string = my_string.slice(0,s) + my_string.slice(s,e+1).split("").reverse().join("") + my_string.slice(e+1)
    })
    
    answer = my_string
    return answer;
}