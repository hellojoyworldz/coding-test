function solution(name, yearning, photo) {
    var answer = [];
    var obj = {}
    
    name.forEach((val, idx) => {
        obj[val] = yearning[idx]
    })
    
    photo.forEach(val => {
        var hap = 0;
        val.forEach(item =>{
            if(obj[item]) hap += obj[item]
        })
        answer.push(hap)
    })
    return answer;
}