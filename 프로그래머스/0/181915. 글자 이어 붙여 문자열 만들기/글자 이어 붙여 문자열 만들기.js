function solution(my_string, index_list) {
  var answer = '';
  
  index_list.map((v)=>{
    console.log(v)
    answer += [...my_string][v]
  })

  console.log(answer)
  return answer;
}

solution("zpiaz",[1, 2, 0, 0, 3])