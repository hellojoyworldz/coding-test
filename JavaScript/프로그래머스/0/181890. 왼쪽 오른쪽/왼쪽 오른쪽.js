function solution(str_list) {
    var answer = [];
    
    for(var i=0; i <str_list.length; i++){
    //for(var i in str_list){ i는 문자열.
        if(str_list[i] === 'l') {
            answer = str_list.slice(0,i) 
            break
        }else if(str_list[i] === 'r') {
            answer = str_list.slice(Number(i)+1) 
            break
        }
    }
    
    
    return answer;
}