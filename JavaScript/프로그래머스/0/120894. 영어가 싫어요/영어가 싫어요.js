function solution(numbers) {
    var answer = 0;
    var txt = numbers
    
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for(let i=0; i < arr.length ;i++){
       txt = txt.replaceAll(arr[i], i)
    }
    
    answer =parseInt(txt)
    
    return answer;
}