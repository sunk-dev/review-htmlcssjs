//js는 정수 실수 구분 않고 모두 실수 처리함.
let num1=0;
let num2=9.9;
console.log(typeof num1);
console.log(typeof num2);

console.log(5/2);

//문자타입
let s1='str1';
let s2="str2";
let s3=`str3`; //백틱 중요
console.log(typeof s3);
let tag='<ul><li><a href="#">link</a></li></ul>';
console.log(tag);
//엔터치고 값 입력 가능

let userName='뽀로로';
let userAge=5;
console.log(`제이름은 ${userName}이구요 나이는 ${userAge}`);

//논리 타입 boolean
//true, flase

//undefined타입과 null 타입
//undefined:변수 만들고 값 안 넣어둔 상태(실수)
//null:의도적으로 값이 없다는 표현을 하는 상태(고의)

let address;
console.log(address);

let w='충남 청양군 읍내리';
w=null;//값이 없음을 알릴때,
