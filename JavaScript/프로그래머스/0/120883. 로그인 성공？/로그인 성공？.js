function solution(id_pw, db) {
    var answer = '';
    
    for(const val of db){
        if(id_pw[0] === val[0] && id_pw[1] === val[1]) {
            answer =  "login" 
            break
        }else if(id_pw[0] !== val[0]){
            answer = 'fail'
        }else if(id_pw[0] === val[0] && id_pw[1] !== val[1]){
            answer = 'wrong pw'
            break
        }
    }
    
    return answer;
}

