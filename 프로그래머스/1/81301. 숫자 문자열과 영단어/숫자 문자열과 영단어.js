function solution(s) {
    var answer = 0;
    var data = ["zero","one","two","three","four","five","six","seven","eight","nine"]
    
    if(!isNaN(s)){
        return Number(s)
    }
    
    for(var i=0; i < data.length;i++){
        if(s.indexOf(data[i]) > -1){
            s = s.replaceAll(data[i], i)
        }
    }
    
    answer = Number(s)
    return answer;
}