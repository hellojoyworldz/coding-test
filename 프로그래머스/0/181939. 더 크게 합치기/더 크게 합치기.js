function solution(a, b) {
    var answer = 0;
    var aString = a.toString();
    var bString = b.toString();

    var ab = Number(aString + bString);
    var ba = Number(bString + aString);

    answer = ab > ba ? ab : ba

    console.log(answer)
    return answer;
}

