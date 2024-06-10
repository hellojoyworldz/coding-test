function solution(spell, dic) {
    var answer = 0;
    
    const sortSpell = spell.sort().join("")
    
    for(const word of dic){
        if(word.split("").sort().join("") === sortSpell){
            answer = 1;
            break
        }
    }
    
    answer = answer ? 1: 2
    
    
    return answer;
}