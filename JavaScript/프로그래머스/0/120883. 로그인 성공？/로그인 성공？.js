function solution(id_pw, db) {
    var answer = '';
    answer = 'fail'
    
    for(const val of db){
        if(id_pw[0] === val[0] ) {
            answer = id_pw[1] === val[1] ?  "login" : 'wrong pw';
            break
        }
    }
    
    return answer;
}

