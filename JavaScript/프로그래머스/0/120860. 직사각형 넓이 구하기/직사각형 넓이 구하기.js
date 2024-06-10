function solution(dots) {
    var answer = 0;
    
    var sortDots = dots.sort()
    answer = Math.abs(sortDots[1][1]  - sortDots[0][1])  * Math.abs(sortDots[2][0] - sortDots[1][0])
    return answer;
}