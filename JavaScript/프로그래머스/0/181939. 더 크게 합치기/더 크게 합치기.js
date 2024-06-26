function solution(a, b) {
    var answer = 0;
    var aString = a.toString();
    var bString = b.toString();

    var ab = aString + bString;
    var ba = bString + aString;
    // var ab = ''+a+b
    // var ba = ''+b+a
    
    // answer = ab > ba ? +ab : +ba
    // answer = ab > ba ? parseInt(ab) : parseInt(ba)
    answer = ab > ba ? Number(ab) : Number(ba)

    console.log(answer)
    return answer;
}
solution(89,8)


function solution2(a, b) {
    var answer = 0;
    answer = Math.max(`${a}${b}` , `${b}${a}`)

    console.log(answer)
    return answer;
}
solution2(89,8)
