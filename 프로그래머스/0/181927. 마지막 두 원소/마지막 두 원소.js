console.time('solution')
function solution(num_list) {
  var answer = [];
  answer.push(...num_list)
  
  if(num_list[num_list.length - 1] > num_list[num_list.length - 2]){
    answer.push(num_list[num_list.length - 1] - num_list[num_list.length - 2])
  }else{
    answer.push(num_list[num_list.length - 1]*2)
  }

  console.log(answer)
  return answer;
}
solution([5, 2, 1, 7, 5])
console.timeEnd('solution')


console.time('solution2')
function solution2(num_list) {
  var answer = [];
  const [a, b] = [...num_list].reverse();
  answer = [...num_list, a > b ? a-b : a*2]

  console.log(answer)
  return answer
}
solution2([5, 2, 1, 7, 5])
console.timeEnd('solution2')