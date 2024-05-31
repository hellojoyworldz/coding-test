function solution(my_str, n) {
    var answer = [];
    var str = ''
    for (var i=0; my_str.length > i; i++){
        
        str += my_str[i]
        if(str.length === n) {
            answer.push(str)
            str = ''
        }else if(i === my_str.length-1){
            answer.push(str)
        }
    }
    return answer;
}