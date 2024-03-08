function solution(a, b) {
    var answer = '';
    
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.isSafeInteger())

    answer = (BigInt(a) + BigInt(b)).toString()
    return answer;
}