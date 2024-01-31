function solution(arr) {
  var answer = [];
  arr.map((val,index) => {
    for(var i=0; i < val; i++){
      answer.push(val)
    }
  })

  return answer;
}
