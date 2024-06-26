function solution(num_list) {
  var answer = 0;
  for(var i = 0; i < num_list.length; i++){
    if(num_list[i] < 0) {
      answer = i
      break
    }else{
      answer = -1
    }
  }
  
  console.log(answer)
  return answer;
}
solution([12, 4, 15, 46, 38, -2, 15])

function solution2(num_list){
  var answer = 0;
  answer = num_list.findIndex(v => v < 0)
  
  console.log(answer)
  return answer
}
solution2([12, 4, 15, 46, 38, -2, 15])

function solution3(num_list){
  var answer = 0;
  answer = num_list.filter((v,i) =>{ 
    if(v < 0)  return v
  })
  answer = num_list.indexOf(answer[0])
  
  console.log(answer)
  return answer
}
solution3([12, 4, 15, 46, 38, -2, 15])