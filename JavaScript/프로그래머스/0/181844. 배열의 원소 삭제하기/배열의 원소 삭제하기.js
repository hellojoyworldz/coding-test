function solution(arr, delete_list) {
  var answer = [];

  arr.filter(x => {
    if(!delete_list.includes(x)) answer.push(x)
  })

  console.log(answer)
  return answer;
}
solution([293, 1000, 395, 678, 94],	[94, 777, 104, 1000, 1, 12] )


function solution2(arr, delete_list) {
  var answer = [];
  answer = arr.filter(x => !delete_list.includes(x))

  console.log(answer)
  return answer
}

solution2([293, 1000, 395, 678, 94],	[94, 777, 104, 1000, 1, 12] )