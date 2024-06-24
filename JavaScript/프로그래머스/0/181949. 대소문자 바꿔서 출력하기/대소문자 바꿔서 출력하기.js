const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    var answer = '';
    
    for(let val of str){
        answer += val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()
    }
    
    console.log(answer)
    
  
});