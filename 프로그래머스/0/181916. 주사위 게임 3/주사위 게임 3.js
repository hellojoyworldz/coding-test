function solution(a, b, c, d) {
    var answer = 0;
    var ary = [a,b,c,d]
    var obj = {}
    var point = []
    
    
    ary.forEach(val => obj[val] = (obj[val] || 0) + 1)
    point = Object.entries(obj).sort((a, b) => b[1] - a[1])
    
    const [p, pCount] = [Number(point[0][0]), point[0][1]]
    const [q, qCount] = point[1] ? [Number(point[1][0]), point[1][1]] : [0,0]
    const [r, rCount] = point[2] ? [Number(point[2][0]), point[2][1]] : [0,0]
    
    if(pCount === 4){
        answer = 1111 * p
    }else if(pCount === 3){
        answer = (10 * p + q) ** 2
    }else if(pCount === 2 && qCount === 2){
        answer = (p + q) * Math.abs(p - q)
    }else if(pCount === 2){
        answer = q * r
    }else {
        answer = Math.min(a,b,c,d)
    }


    


    
    return answer;
}