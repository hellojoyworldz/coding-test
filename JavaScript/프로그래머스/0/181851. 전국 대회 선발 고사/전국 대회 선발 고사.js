function solution(rank, attendance) {
    var answer = 0;
    
    var [a,b,c] = rank.map((v,i) => { if(attendance[i] === true) return [v,i]} ).sort((a,b)=>a[0]-b[0])
    answer = (10000*a[1]) + (100*b[1]) + c[1]
    return answer;
}