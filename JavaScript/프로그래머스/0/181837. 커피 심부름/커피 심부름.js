function solution(order) {
    var answer = 0;
    
    order.forEach((val)=> {    
        switch(val){
            case "iceamericano" : 
            case "americanoice" : 
            case "hotamericano" : 
            case "americanohot"	: 
            case "americano" :  
            case "anything": 
                answer += 4500
                break;
            case "icecafelatte" : 
            case "cafelatteice" : 
            case "hotcafelatte" : 
            case "cafelattehot" : 
            case "cafelatte" :
                answer += 5000
                break;
            default : 
        }
    })
    return answer;
}