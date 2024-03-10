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