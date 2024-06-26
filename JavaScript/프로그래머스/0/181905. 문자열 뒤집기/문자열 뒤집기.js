function solution(my_string, s, e) {
    var answer = '';
    
    var ary = my_string.split('').slice(s,e+1).reverse()
    
    var i = 0;
    my_string.split('').map((val, idx) => {

        if(idx >=s && idx <= e){
            answer += ary[i]
            i++
        }else{
            answer += val
        }
    })

    return answer;
}

function solution2(my_string, s, e) {
    var answer = ''

    answer = my_string.slice(0,s) + my_string.slice(s,e+1).split('').reverse().join('') + my_string.slice(e+1,my_string.length)
    
    return answer;
}
solution2("Progra21Sremm3",6,12)