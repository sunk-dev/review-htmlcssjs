
//void 함수는 다른 변수에 담지도 말고 
//다른 함수의 매개값으로 쓰지도 말아라
//반환값: 함수 호출이 끝나면 함수 호출부로 전달될 값
//반환문은 함수의 탈출문
function addNumber(n1,n2){
    return n1+n2;
}
let result=addNumber(5,7);
console.log(result);

//함수의 중첩호출
let r2=addNumber(addNumber(addNumber(3,2),12),10);
console.log(r2);

//void 함수:리턴이 없는 함수
function multi(n1,n2){
    let result=n1*n2;
    console.log(`${n1}x${n2}=${result}`);
}

multi(4,6);
