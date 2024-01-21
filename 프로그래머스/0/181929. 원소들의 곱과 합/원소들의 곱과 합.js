function solution(num_list) {
    var answer = 0;
    var hap = 0;
    var gop = 1;
    
    num_list.map(a => {
        hap += a
        gop *= a
        answer =  gop < hap*hap ? 1 : 0
    })

    return answer;
}

