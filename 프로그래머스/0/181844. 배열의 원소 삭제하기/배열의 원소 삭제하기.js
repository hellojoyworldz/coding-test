function solution(arr, delete_list) {
  var answer = [];

  arr.filter(x => {

    console.log(x)
    if(!delete_list.includes(x)) answer.push(x)
  })

  console.log(answer)
  return answer;
}

solution([293, 1000, 395, 678, 94],	[94, 777, 104, 1000, 1, 12] )