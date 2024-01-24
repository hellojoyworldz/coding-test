function solution(my_string, is_prefix) {
    var answer = 0;
    console.log(my_string.indexOf(is_prefix))
    answer = my_string.indexOf(is_prefix) ? 0 : 1
    
    console.log(answer)
    return answer;
}
solution("banana"	,"bananaa")