function solution(money) {
    const price_americano = 5500;
    var answer = [Math.floor(money / price_americano) , money % price_americano ];
    return answer;
}



