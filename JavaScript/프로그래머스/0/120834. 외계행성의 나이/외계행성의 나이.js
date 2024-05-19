function solution(age) {
    var answer = '';
    
    var ap = {
        0: "a",
        1: "b",
        2: "c",
        3: "d",
        4: "e",
        5: "f",
        6: "g",
        7: "h",
        8: "i",
        9: "j",
    }
    
    age.toString().split("").map(val => {
        answer += ap[val]
    })
   
    return answer;
}