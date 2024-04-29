function solution(hp) {
    var answer = 0;

    var i = 5
    while(hp !==0 && i >0){
        answer += Math.trunc(hp/i)
        hp = hp%i
        i-=2
    }
      
    return answer;
}