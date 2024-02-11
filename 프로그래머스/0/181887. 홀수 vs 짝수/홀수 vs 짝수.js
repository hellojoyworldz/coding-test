function solution(num_list) {
    var answer = 0;
    var odd = 0;
    var even = 0;
    
    num_list.map((val, idx) => {
        (idx+1) % 2 === 0 ?  even += val : odd += val
    })

    //answer = odd > even ? odd : even
    answer = Math.max(odd, even);
    return answer;
}
solution([4, 2, 6, 1, 7, 6])

function solution2(num_list) {
    var answer = 0;

    var res = 0;
    res  = num_list.reduce(([o,e],c,i) => {
        console.log([o,e])
        console.log(c)
        console.log(i)
        return i % 2 ? [o + c, e] : [o, e + c]
    },[0,0])
    console.log(Math.max(...res))
    
    
    answer =  Math.max(...num_list.reduce(([o, e], c, i) =>  i % 2 ? [o + c, e] : [o, e + c], [0, 0]));
    return answer;
}
solution2([4, 2, 6, 1, 7, 6])