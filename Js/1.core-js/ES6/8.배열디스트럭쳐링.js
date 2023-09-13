// 구조분해 할당

const userNames=['김철수','강감찬','박영희'];
// userNames에서 각각의 요소들은 다시 변수로 저장시키고 싶다.

const [kim,kang,park]=userNames;

const [kk,gg]=userNames; //전체 변수를 지정하지 않으면 순서대로 변수에 할당
console.log(`kk:${kk} gg ${gg}`);

//변수값 교환
let first=10;
let second=20;

[second,first]=[first,second];
console.log(`1:${first} 2:${second}`);

//맨앞2개는 각각의 변수에저장하고
//나머지는 묶어서 다시 배열로 만들고 싶다.(스프레드 이용)

const [one,three,...rest]=[1,3,5,7,9];
console.log(`one:${one} three:${three} rest:${rest}`);

//스프레드를 이용한 배열 간편복사

console.log('-----------------------');

const foods=['감자튀김','햄버거','콜라'];

const fakeCopyFoods=foods; //배열  포인터 복사:원본과 연결되었음

//원본과 연결되어있지 않음!
const realCopyFoods=foods.slice(); //슬라이스 이용해서 전체 복사
const realCopyFoods2=[...foods,'닭강정']; //스프레드 복사, 뒤에 요소 추가가능



