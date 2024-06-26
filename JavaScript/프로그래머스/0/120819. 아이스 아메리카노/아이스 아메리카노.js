function solution(money) {
    const price_americano = 5500;
    var answer = [Math.floor(money / price_americano) , money % price_americano ];
    return answer;
}


/**
 * 제한사항 처리
 * 문자 처리
 * 콤마 처리
 */


