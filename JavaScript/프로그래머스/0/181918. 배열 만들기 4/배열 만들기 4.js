function solution(arr) {
    var stk = [];
    
    var i=0;
    while(i < arr.length){
        if(stk.length === 0) stk.push(arr[i++]);
        else if(stk[stk.length-1] < arr[i]) stk.push(arr[i++]);
        else if(stk[stk.length-1] >= arr[i]) stk.pop()
    }
    
    console.log(stk)
    return stk;
}

solution([1, 4, 2, 5, 3])


function solution2(arr) {
    var stk = [];
    
    for(var i=0;i <arr.length; i++){
        if(stk.length === 0) {
            stk.push(arr[i]);
            continue;
        }else if(stk[stk.length-1] < arr[i]) {
            stk.push(arr[i]);
            continue; 
        }else if(stk[stk.length-1] >= arr[i]){
            stk.pop();
            i--
        }
    }
    
    console.log(stk)
    return stk;
}

solution2([1, 4, 2, 5, 3])
