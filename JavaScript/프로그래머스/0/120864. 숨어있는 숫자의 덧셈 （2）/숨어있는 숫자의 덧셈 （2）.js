function solution(my_string) {
    var answer = 0;
    var num = '';
    var total = [];
    
    for(let i=0; i < my_string.length; i++){
        if(!isNaN(my_string[i])){
           num += my_string[i]
        
            if(isNaN(my_string[i+1])){
                total.push(num)
                num=''
            }
        }
    
    }

    answer = total.reduce((prev,curr) => prev + Number(curr) , 0)
    
    return answer;
}