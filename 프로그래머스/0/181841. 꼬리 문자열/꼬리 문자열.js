function solution(str_list, ex) {
    var answer = '';

    str_list.map((v) => {
        if(!v.includes(ex)) answer += v
    })

    console.log(answer)
    return answer;
}

solution(["abc", "def", "ghi"]	, "ef")