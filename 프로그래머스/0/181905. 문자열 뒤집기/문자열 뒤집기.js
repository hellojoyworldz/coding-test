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