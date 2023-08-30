
let x;
console.log(x);

// const 는 선언하면서 반드시 초기화 해야함!

const y=10;
console.log(y);
//상수: 변수의 반대개념으로 값변경이 금지된 변수
// 적극적 사용 권장
//관례적으로 대문자로 지정

// 상수 사용 예-> 코드 가독성 증가
const COLOR_YELLOW='#FF0';
const COLOR_GREEN='#0F0';
$div.style.background=COLOR_GREEN;
$div.style.background=COLOR_YELLOW;

// const 사용: 객체의 불변성위해 이용하기
// 대부분 const 사용하다가 재할당이 필요한 경우만 한정하여 let을 고려하기
// 변수의 스코프는 최대한 좁게 만들기
const kim={
    name:'김철수',
    age:30
}
//const로 설정하면 아예 변경은 불가