function solution(my_string, alp) {
  var answer = '';
  for(target of my_string) target === alp ? answer+=target.toUpperCase() : answer+=target

  console.log(answer)
  return answer;
}

solution("programmersp", "p")