function solution(num_list, n) {
  var answer = [];
  answer = num_list.slice(n-1)

  console.log(answer)
  return answer;
}
solution([5, 2, 1, 7, 5],2)