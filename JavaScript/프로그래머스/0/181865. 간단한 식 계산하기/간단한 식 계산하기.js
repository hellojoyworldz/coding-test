function solution(binomial) {
  var answer = 0;

  let res = binomial.split(" ")
  let a = Number(res[0])
  let b = Number(res[2])
  let op = res[1]

  function ops(a,op,b){
    if(op === '+') return a + b
    else if(op === '-') return a - b
    else if(op === '*') return a * b
  }

  answer = ops(a,op,b)
  console.log(answer)
  return answer;
}
solution("43 + 12")


function solution2(binomial) {
  var answer = 0;

  let [a,op,b] = binomial.split(" ")
  const ops = {
    "+" : (a,b) => a+b,
    "-" : (a,b) => a-b,
    "*" : (a,b) => a*b,
  }
  answer = ops[op](Number(a),Number(b))

  console.log(answer)
  return answer;
}
solution2("43 + 12")

function solution3(binomial) {
  var answer = 0;

  let [a,op,b] = binomial.split(" ")
  
  switch(op){
    case "+" : 
      answer =  parseInt(a)+parseInt(b)
      break;
    case "-" : 
      answer = a-b
      break;
    case "*" : 
      answer = a*b
      break;
  }
  console.log(answer)

}
solution3("43 + 12")