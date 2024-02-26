function solution(num_list) {
  var answer = [];
  answer = num_list.sort((a,b) => a - b).slice(5)

  console.log(answer)
  return answer;
}

solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])

var numbers = ['4', '2', '5', '1', '350'];
// 오름차순 (Infinity 및 NaN이 포함되어 있지 않은 경우).
numbers.sort( (a, b) =>  {
  return a-b
} );


console.log(numbers);
// 내림차순 (Infinity 및 NaN이 포함되어 있지 않은 경우).
numbers.sort( (a, b) =>  b-a );
console.log(numbers);


var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// name 기준으로 정렬
items.sort(function (a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1; // a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
  }
  if (nameA > nameB) {
    return 1; // 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다.
  }

  // 이름이 같을 경우
  return 0; //  0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬
});

console.log(items)