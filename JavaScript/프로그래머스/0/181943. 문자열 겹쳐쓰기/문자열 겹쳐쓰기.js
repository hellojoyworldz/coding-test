function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    /*
    for(var i=s; i < s + overwrite_string.length;i++){
        my_string = my_string.slice(0,i) + overwrite_string[i-s] + my_string.slice(i+1)
    }
    */
    answer = my_string.slice(0,s) + overwrite_string + my_string.slice(s+ overwrite_string.length)
    
    return answer;
}