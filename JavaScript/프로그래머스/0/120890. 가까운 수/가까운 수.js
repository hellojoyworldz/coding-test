function solution(array, n) {
  var answer = 0;

  answer = array.sort((a,b) => Math.abs(a-n) - Math.abs(b-n) || a-b)[0]

  return answer;
}

function solution2(array, n) {
  var answer = 0;

  answer = array[0];
  var abs = Math.abs(array[0] - n);
  array.map((val, idx) => {
    if (abs === Math.abs(val - n)) {
      answer = answer > val ? val : answer;
    } else if (abs > Math.abs(val - n)) {
      abs = Math.abs(val - n);
      answer = val;
    }
  });

  return answer;
}

function solution3(array, n) {
  var answer = 0;

  array.map((val, idx) => {
    if (Math.abs(answer - n) > Math.abs(val - n)) {
      answer = val;
    } else if (Math.abs(answer - n) === Math.abs(val - n)) {
      answer = answer > val ? val : answer;
    }
  });

  return answer;
}
