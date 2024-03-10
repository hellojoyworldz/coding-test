function solution(arr) {
    var answer = [[]];
    var len = arr.length - arr[0].length
    
    if(len < 0){
        var ary = new Array(arr[0].length).fill(0)
        for(var i=0; i < Math.abs(len); i++) arr.push(ary)
    }else if(len>0){
        arr.map(val => {for(var i=0; i < len; i++) val.push(0)}) 
    }
    
    answer = arr
    return answer;
}


function solution2(arr) {
    var answer = [[]];
    var len =Math.max(arr.length, Math.max(...arr.map(v => v.length)))
    
    for(let val of arr) while(val.length < len) val.push(0)
    while(arr.length < len) arr.push(Array(len).fill(0))

    answer = arr
    console.log(answer)
    return answer;
}

solution2([[572, 22, 37], [287, 726, 384], [85, 137, 292], [487, 13, 876]])
solution2([[57, 192, 534, 2], [9, 345, 192, 999]])