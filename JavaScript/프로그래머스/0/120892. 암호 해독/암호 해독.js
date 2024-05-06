function solution(cipher, code) {
    var answer = '';
    
    answer = cipher.split("").filter((val, idx) =>  (idx+1) % code === 0 ?  true : false).join("")
    
 
    return answer;
}