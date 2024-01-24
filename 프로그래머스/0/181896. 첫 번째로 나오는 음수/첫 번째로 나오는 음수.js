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