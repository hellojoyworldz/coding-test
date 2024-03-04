function solution(my_string) {
    var answer = [];
    answer = Array(52).fill(0)
    
    for(var val of my_string){
        var i = (val >= "A" && val <= "Z") ? val.charCodeAt(0) - "A".charCodeAt(0) : val.charCodeAt(0) - "A".charCodeAt(0) - 6
        answer[i]+= 1
    }
    
    return answer;
}