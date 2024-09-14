function solution(number) {
    var answer = 0;

    for(var i=0; i < number.length-2; i++){
        for(var j=i+1; j < number.length -1; j++){
            for(var z=j+1; z <number.length; z++){
                if( number[i] + number[j] + number[z] === 0) answer+=1
            }
        }
        
    }
    return answer;
}