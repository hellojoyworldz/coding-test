function solution(common) {
    var answer = 0;
    
    var [x,y,z] = common
    var last = common[common.length-1]
    answer = (y-x === z-y) ? last + z-y : last * z/y
    
    return answer;
}