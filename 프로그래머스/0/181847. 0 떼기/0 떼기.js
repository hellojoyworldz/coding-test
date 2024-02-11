function solution(n_str) {
    var answer = '';
    ary = [...n_str]

    for(let i=0; i< n_str.length ;i++){
        console.log(i)
        if(n_str[i] === '0') ary[i]=''
        else break
    }
    
    answer = ary.join('')
    console.log(answer)
    return answer;
}

solution("854020")