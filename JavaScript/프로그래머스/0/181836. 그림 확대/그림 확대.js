function solution(picture, k) {
    var answer = [];
 
    picture.map((val,idx) => {
        var data = ''
        for(var i=0; i < val.length; i++){
            for(var j=0; j < k; j++) data += val[i]
            //data += val[j].repeat(k)
        }
        for(var n=0; n <k;n++) answer.push(data)      
    })
    
    
    return answer;
}

function solution2(picture, k) {
    var answer = [];

    picture.map((val,idx) => {
        var data = [...val].reduce((acc,cur) => acc + cur.repeat(k),'')
        for(var n=0; n <k;n++) answer.push(data)
    })
    return answer;
}

solution2(["x.x", ".x.", "x.x"]	,3)
