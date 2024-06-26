function solution(numbers) {
    var answer = 0;
    // numbers.sort((a,b) => b - a)
    // numbers.sort((a,b) => { return b - a })
    numbers.sort((a,b) => a - b).reverse()
    answer = numbers[0] * numbers[1]

    console.log(answer)
    return answer;
}
solution([2,5,8,0,29,32])

function solution2(numbers) {
    var answer = 0;
    let [a, b] = numbers.sort((a,b) => b - a);
    answer = a * b

    console.log(answer)
    return answer;
}
solution2([2,5,8,0,29,32])

function solution3(numbers) {
    var answer = 0;
    numbers.sort((a,b) => a - b)
    console.log(numbers)
    answer = numbers.at(-1) * numbers.at(-2)

    console.log(answer)
    return answer;
}
solution3([2,5,8,0,29,32])

function solution4(numbers) {
    var answer = 0;
    numbers.sort((a,b) => a - b)
    answer = numbers.pop() *  numbers.pop()
    
    console.log(answer)
    return answer;
}
solution4([2,5,8,0,29,32])

function solution5(numbers) {
    var answer = 0;
    let a = Math.max(...numbers)
    numbers.splice(numbers.indexOf(a),1)
    let b = Math.max(...numbers)
    answer = a * b
    
    console.log(answer)
    return answer;
}
solution5([2,5,8,0,29,32])


/**
 * sort(), reverse(), at(), pop()
 * () => {return } , () =>
 * Math.max(), splice()
 */