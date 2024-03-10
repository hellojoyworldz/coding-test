function solution(picture, k) {
    var answer = [];
 
    picture.map((val,idx) => {
        var data = ''
        for(var i=0; i < val.length; i++){
            for(var j=0; j < k; j++) data += val[i]
        }
        for(var n=0; n <k;n++) answer.push(data)      
    })
    
    
    return answer;
}