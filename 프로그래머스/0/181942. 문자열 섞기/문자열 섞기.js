function solution(str1, str2) {
    var answer = '';
    var i = 0;
    
    while(answer.length < str1.length + str2.length){
        answer += str1[i] + str2[i]
        i++
    }
    
    return answer;
}