/* 콜백이란
함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
고차함수: ㅇ매개변수를 통해 외부에서 콜백함수를 전달받은 함수 */
/*2 */
/* function calculate(func){//add라는 이름이 func라는 매개변수로 들어감
    console.log(`계산기 입니다`);
    const result=func(10,20);
    return result
    ;
}
function add(n1,n2){
    return n1+n2;
}
const r=calculate(add);
console.log(`r:${r}`);

const r2=calculate(function(n1,n2){
    return n1-n2;
});
console.log(`r2${r2}`);

const r3=calculate((n1,n2)=>n1*n2);
console.log(`r3${r3}`);

//정수n을 전달하면 1~n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n){
    for(let i=1;i<=n;i++){
        if(i%2===0)console.log(i);
    }
}
showEvenNumber(7);
function showOddNumber(n){
    for(let i=1;i<=n;i++){
        if(i%2===1)console.log(i);
    }
}
showOddNumber(7); */

function showOddOrEvenNumber(n,isOdd){
    const delim=isOdd?1:0;
    for(let i=1;i<=n;i++){
        if(i%2===delim)console.log(i);
    }
}
/* showOddOrEvenNumber(7,true); */

/* 콜백을 적용한 솔류션 */
/* 함수안에 코드를 넣을때는 함수로 감싸서 던져야함. */
function showNumber(n,code){
    for(let i=1;i<=n;i++){
        if(code(i))console.log(i);
    }

}
showNumber(10,function(i){
    return i%2===0&& i%4!==0;
});
showNumber(10,k=>k%3===0);

