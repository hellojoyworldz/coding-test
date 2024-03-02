function solution(strArr) {
    var answer = 0;
    var obj = {};
    strArr.map(val => obj[val.length] === undefined ? obj[val.length] = 1 : obj[val.length] += 1)
    
    answer = obj[Object.keys(obj)[0]]
    for(var i=0; i < Object.keys(obj).length; i++) {
        var value = obj[Object.keys(obj)[i]]
        if(value > answer) answer = value 
    }

    return answer;
}