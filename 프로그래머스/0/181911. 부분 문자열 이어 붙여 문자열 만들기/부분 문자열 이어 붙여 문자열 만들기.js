function solution(my_strings, parts) {
    var answer = '';
    
    // answer = parts.map(([start, end], index) => my_strings[index].substring(start,end+1)).join("")
    // answer = parts.map(([start, end], index) => my_strings[index].slice(start,end+1)).join("")
    // answer = my_strings.reduce((res, curr, idx) => res + curr.slice(parts[idx][0], parts[idx][1]+1),'')
    // answer = my_strings.map((v,i) => v.slice(parts[i][0],parts[i][1]+1)).join('')
    my_strings.map((v,i) => {
        answer += v.substring(parts[i][0], parts[i][1]+1)
    })

    console.log(answer)
    return answer;
}
