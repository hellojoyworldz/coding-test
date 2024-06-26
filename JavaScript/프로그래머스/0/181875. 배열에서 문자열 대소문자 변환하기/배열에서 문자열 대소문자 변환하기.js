function solution(strArr) {
  var answer = [];
  
  strArr.map((val, index) => {
    answer.push(!(index % 2) ? val.toLowerCase() : val.toUpperCase())
  })

  return answer;
}

solution(["AAA","BBB","CCC","DDD"])