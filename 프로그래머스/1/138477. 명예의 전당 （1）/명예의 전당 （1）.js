function solution(k, score) {
    let answer = [];
    let arr = [];
    
    function addSort(s){
        arr.push(s);
        arr.sort((a, b) => b-a);
    }

    score.map((s) => {
        if (arr.length != k) {
            addSort(s)
            answer.push(arr.at(-1));
        } else {
            addSort(s)
            arr.pop();
            answer.push(arr.at(-1));
        }
    })
    return answer;
}