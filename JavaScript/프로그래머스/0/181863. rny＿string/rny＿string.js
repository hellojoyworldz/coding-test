function solution(rny_string) {
  var answer = '';
  for(var val of rny_string){
    if(val === "m") val = 'rn'
    answer += val
  }

  console.log(answer)
  return answer;
}


solution("masterpiece")