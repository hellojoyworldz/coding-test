function solution(ineq, eq, n, m) {
    var answer = 0;
    
    if(ineq === ">" && eq === "=") answer = +(n >= m)
    else if(ineq === "<" && eq === "=") answer = +(n <= m)
    else if(ineq === ">" && eq === "!") answer = +(n > m)
    else if(ineq === "<" && eq === "!") answer = +(n < m)
    
    return answer;
}


function solution2(ineq, eq, n, m) {
    const operations = {
        '>=': (n, m) => n >= m,
        '<=': (n, m) => n <= m,
        '>!': (n, m) => n > m,
        '<!': (n, m) => n < m,
    };
    
    answer = Number(operations[ineq+eq](n,m))
    console.log(answer)
}
solution2("<",	"=",	20,	50)
