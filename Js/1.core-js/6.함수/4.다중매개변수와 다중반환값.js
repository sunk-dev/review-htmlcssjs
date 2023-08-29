// multi parameter:매개변수의 개수가 n개일 경우
//n개를 하나의 박스에(배열,객체) 담아서 전달하자
//정수 n 개의 총합
function addAll(numbers){
    let total=0;
   for (let n of numbers){
    total+=n;
   }
   return total;
}

let r1=addAll([10,20,30]);
console.log(r1);

//ES6 버전 정수 n개의 총합 - 스프레드 이용(...numbers) 
//주의: 배열하나만 쓰고 싶을때 이용.
function addAllEs6(...numbers){
    let total=0;
    for (let n of numbers){
     total+=n;
    }
    return total;


}
let r2=addAllEs6(10,20,30);
console.log(r2);

//다중 반환값
// 함수의 반환값은 언제나 하나여야 한다!
// f(x)=3a+5b+4c

function operateAll(n1,n2){
    let plus=n1+n2
    let minus=n1-n2
    let multi=n1*n2
    let devide=n1/n2;
    return {plus,minus,multi,devide};
}

let results=operateAll(20,10);
console.log(`사칙연산 결과 `,results);