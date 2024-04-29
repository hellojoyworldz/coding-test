function solution(hp) {
    var answer = 0;
    answer = Math.trunc(hp/5) + Math.trunc(hp%5/3) +  Math.trunc(hp%5%3/1)
    return answer;
}

function solution2(hp) {
    var answer = 0;

    var i = 5
    while(hp !==0 && i >0){
        answer += Math.trunc(hp/i)
        hp = hp%i
        i-=2
    }
      
    return answer;
}