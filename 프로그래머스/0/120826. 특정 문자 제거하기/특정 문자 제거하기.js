function solution(my_string, letter) {
    var answer = '';
    answer = my_string.replaceAll(letter,'')
    console.log(answer)
    return answer;
}
solution('dsfsdfddD' , 'd')

function solution2(my_string, letter) {
    var answer = '';
    answer = my_string.split(letter).join("")
    console.log(answer)
    return answer;
}
solution2('dsfsdfddD' , 'd')

function solution3(my_string, letter) {
    var answer = '';
    answer = my_string.replace(new RegExp(letter, 'g'), '')
    console.log(answer)
    return answer;
}
solution3('dsfsdfddD' , 'd')

function solution4(my_string, letter) {
    var answer = '';
    answer = Array.from(my_string).filter(t => t !== letter).join('')
    // Array.from(my_string).forEach(c => c !== letter ? answer += c : '')
    console.log(answer)
    return answer;
}
solution4('dsfsdfddD' , 'd')

function solution5(my_string, letter) {
    var answer = '';
    var str = [...my_string]
    str.forEach( c => c !==letter ? answer += c : '')
    /*
    for(var i=0; i < str.length; i++){
        if(str[i] !== letter) answer +=str[i]
    }
    */
    console.log(answer)
    return answer;
}
solution5('dsfsdfddD' , 'd')

/**
 * replaceAll
 * split, join
 * regExp, replace
 * Array.form(), filter
 * 구조분해할당
 */
