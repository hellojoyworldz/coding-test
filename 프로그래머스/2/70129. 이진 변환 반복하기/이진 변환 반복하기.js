function solution(s) {
    var answer = [];
    var i = 0;
    var x = s
    var zero = 0;
    var one = 0;
    
    while(x !== "1"){
        for(let val of x){
            if(val === "0") zero+=1
            else one += 1
        }
        x = one.toString(2)
        one = 0
        i++
    }
    
    answer = [i,zero]
 
    


    return answer;
}