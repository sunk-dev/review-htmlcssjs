// array 순서가 있는 집합 자료형
// 배열 선언
let numbers=[1,2,3,4,5]
console.log(typeof numbers); //Object형:세부적으로는  array지만 크게는 전부 객체(Object)로 보고 있다.


// 배열요소 접근
console.log(numbers[3]);
// 배열 길이 출력
console.log(numbers.length);
//배열의 첫번째
console.log(numbers[0]);
// 배열의 마지막 
console.log(numbers[numbers.length-1]);

// 배열 요소(element) 수정
numbers[0]=6;
console.log(numbers);

// 수정시 주의 사항(기존 인덱스 번호가 아닐때)
numbers[5]=7;
console.log(numbers); //배열에 추가가됨 -> 지양하기

//배열 내부 데이터 전체 참조 (순회)
// 1
for (let i=0;i<numbers.length;i++){
    console.log(`numbers[${i}] ${numbers[i]}`);
}
// for of 문
for(let n of numbers){
    console.log(` ${n}`);

}
// ES6:모던 자바스크립트 문법
// foreach 요소 뿐 아니라 인덱스번호도 꺼낼수 있음
numbers.forEach(n=> {
    console.log(`numbers in ${n}`);
});
numbers.forEach(n,inedex=> {
    console.log(`numbers[${inedex}] in ${n}`);
});