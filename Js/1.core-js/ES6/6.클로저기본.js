// 자바스크립트의 함수는 또다른 함수를 리턴할수 있다.

// function Calculator(){
//     console.log(' I am calculator');
//     return (n1,n2)=> n1+n2;
   
// }
const Calculator=()=>(n1,n2)=> n1+n2;
   

const result=Calculator();
console.log(result(5,8));
console.log((Calculator())(7,4));

console.log('==============================');

// let count=0; //전역변수
// //카운트를 증가시키는 함수
// const increase=()=>++count;
// console.log(increase());
// console.log(increase());
// console.log(increase());

// const increase=()=>{
//     let count=0;
//     return ++count;
// }

// 카운터를증가시키는 함수를 리턴하는 클로저를 생성
// const increaseClosure=()=>{
//     let count=0;
//     return ()=>++count;
// }

// const increase=increaseClosure();


// 즉시실행함수:1회성 호출함수를 만들때 주로 사용

const increase=(()=>{
    let count=0;
    return ()=>++count;
})();

const r1= (function(n1,n2){
    return n1+n2;
})(10,20);//여기서 부르고 끝남.
console.log(`r1 :${r1}`);
