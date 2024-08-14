function solution(n, m) {
    var answer = [];
    
    let gcd = 1;
    for(var i=2; i <= Math.min(m,m);i++){
        if(n%i === 0 && m%i === 0) gcd = i
    }
    
    let lcm = 1
    while(true){
        if(lcm % n === 0 && lcm % m === 0) break;
        lcm++
    }
    
    answer = [gcd, lcm]
    return answer;
}