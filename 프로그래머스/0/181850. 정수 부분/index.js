//
var data1 = 0;
data1 = Math.floor('23.945')
data1 = Math.floor(23.945)
data1 = Math.floor('-23.945')
data1 = Math.floor(-23.945)
console.log(data1)

//
var data2 = 0;
data2 = Math.abs('23.945')
data2 = Math.abs('-23.945')
data1 = Math.floor(-23.945)
console.log(data2)

//
var data3 = 0;
data3 = Math.trunc('23.945')
data3 = Math.trunc('-23.945')
data3 = Math.trunc(-23.945)
console.log(data3)

//
var data4 = 0;
data4 = parseInt('23.945', 10) //(default base-10)
data4 = parseInt('-23.945', 10)
data4 = parseInt('    123') // (whitespace is ignored)
data4 = parseInt('    1  234') // (whitespace is ignored)
data4 = parseInt('xyz') // (input can't be converted to an integer) -> NaN
console.log(data4)

// NOT 비트연산(~) : ~a
// 다른 연산자와는 다르게 연산을 진행하는 피연산자는 하나뿐으로, 
// 비트를 1이면 0으로, 0이면 1로 반전시킴. 
// (비트 NOT 연산) 비트 NOT 연산자는 "비트 뒤집기" 또는 "비트 반전"이라고도 부른다.
var data5 = '-23.945'
data5 = ~~(-data5)
console.log(data5)

var data6 = 23.945
data6 = ~~data6
console.log(data6)

// RIGHT SHIFT 비트연산(>>) : a >> b
// 부호를 유지하면서 지정한 수만큼 비트를 전부 오른쪽으로 이동시킴. (right shift 연산)
var data7 = 23.945
data7 = data7 >> 0
console.log(data7)

// toString() : null, undefined 형 변환 시 오류
// String() : 어떤 형태이든 문자로 형변환
var data8 = 23.945
data8 = data8.toString(10) // 기수(radix)를 매개변수로 취합.10진수.
// data8 = null.toString() error
// data8 = undefined.toString() error
console.log(data8)

var data9 = 23.945
data9 = String(data9)
data9 = String(null)
data9 = String(undefined)
console.log(data9)