function solution(my_string, num1, num2) {
    var answer = '';
    
    let ary = my_string.split('');
    [ary[num1], ary[num2]] =  [ary[num2], ary[num1]];
    answer = ary.join('')

    return answer;
}

function solution2(my_string, num1, num2) {
    var answer = '';
    
    answer = my_string.split("").map((val,idx) => {
        if(idx === num1) return my_string[num2]
        else if(idx === num2) return my_string[num1]
        else return val
    }).join("")
    

    return answer;
}