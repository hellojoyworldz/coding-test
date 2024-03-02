function solution(myStr) {
    var answer = [];

    myStr.split("a").forEach((val) => {
        val.split("b").forEach(val2 => {
            val2.split("c").forEach(val3 => {
                if(val3 !== "") answer.push(val3)
            })
        })
    })
    
    if(answer.length === 0) answer = ["EMPTY"]
    console.log(answer)
    return answer;
}
solution("cabab")



function solution2(myStr) {
    var answer = [];

    answer = myStr.split(/[a-c]/).filter(val => val)
    answer = answer.length ? answer : ["EMPTY"]

    console.log(answer)
    return answer;
}
solution2("cabab")
solution2("baconlettucetomato")

function solution3(myStr) {
    var answer = [];

    answer = myStr.match(/[^a-c]+/g) || ["EMPTH"]

    console.log(answer)
    return answer;
}
solution3("cabab")
solution3("baconlettucetomato")