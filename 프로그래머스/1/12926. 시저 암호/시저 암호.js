function solution(s, n) {
    var answer = '';
    var code = 0;
    
    for(var val of s){
        code = val.charCodeAt() 
        
        if(val >= 'a' && val <='z'){
            answer += String.fromCharCode((code - 97 + n) % 26 + 97) 
        }else if (val >= 'A' && val <= 'Z') {
            answer += String.fromCharCode((code - 65 + n) % 26 + 65) 
        }else{
            answer += val
        }
    }
    
    return answer;
}