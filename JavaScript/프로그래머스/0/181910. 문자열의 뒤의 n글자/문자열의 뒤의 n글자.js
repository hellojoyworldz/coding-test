function solution(my_string, n) {
  var answer = '';
  answer = my_string.slice(-n)
  // answer = my_string.slice(my_string.length - n)
  // answer = my_string.slice(my_string.length-n, my_string.length)

  console.log(answer)
  return answer;
}

solution("ProgrammerS123"	,11)
