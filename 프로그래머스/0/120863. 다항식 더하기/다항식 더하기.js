function solution(polynomial) {
    var answer = '';
    
    var txt = 0;
    var num = 0;
    
    var ary = polynomial.split(" + ")
    ary.forEach(val => {
        if(isNaN(val)){
            var rep = val.replace("x","")
            txt += rep ? Number(rep) : 1
        }else{
            num += Number(val)
        }
    })
    
    var x = ''
    
    if(txt){
        x = txt === 1 ? "x" : txt + "x"
    }
    
    if(txt && num){
        answer += x + " + " + num
    }else if(txt && !num){
        answer += x 
    }else if(!txt && num){
        answer += num
    }
    
    console.log(answer)
    
    return answer;
}