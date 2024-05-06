
function solution(cipher, code) {
    var answer = "";
    for(let i= code-1; i<cipher.length; i+=code){
        answer += cipher[i]
    }
    return answer;
}

function solution2(cipher, code) {
    var answer = '';
    answer = cipher.split("").filter((val, idx) =>  (idx+1) % code === 0 ?  true : false).join("")
    return answer;
}