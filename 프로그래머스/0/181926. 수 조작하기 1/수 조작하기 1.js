function solution(n, control) {
    var answer = 0;
    
    for(type of control){
        switch(type){
            case "w": 
                n++
                break;
            case "s": 
                n--
                break;
            case "d": 
                n+=10
                break;
            case "a": 
                n-=10
                break;
        }
    }
    answer = n

    return answer;
}

solution(0,"wsdawsdassw")