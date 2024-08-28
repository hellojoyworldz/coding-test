function solution(array) {

    
    const obj = {}
    
    for(var val of array){
        obj[val] = (obj[val] || 0) + 1;
    }

    
    var ary = Object.entries(obj).sort((a,b) => b[1] - a[1])
    
    if(ary.length === 1){
        return array[0]
    }

    
    return ary[0][1] === ary[1][1] ? -1 : Number(ary[0][0])

}

