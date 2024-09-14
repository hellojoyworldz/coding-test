function solution(n) {
    var answer = 0;
    var one = 0;
    var num = n;
    
    for(var val of n.toString(2)){
        if(val === "1") one += 1
    }
    
    while(true){
        num+= 1;
        var eil = 0;
        
        for(var x of num.toString(2)){
            if(x === "1") eil += 1
        }

        if(one === eil){
            answer = num
            break;
        }
    }
    

    return answer;
}