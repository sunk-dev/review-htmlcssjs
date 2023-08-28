//함수는 동사형으로 정의하기
//재사용성, 모듈화 -> 효율증가
function sayHello(nickName,isMorning){
    if(isMorning){

        console.log(`${nickName} 안녕하세요!`);
    }else{
        
        console.log(`${nickName} 내일봐요!`);
    }
}

//함수의 호출
sayHello('영희',true);
sayHello('철수',false);
sayHello('희영',true);

function makeLine(){
    console.log('-------------------------');
}

makeLine();

//ex 원의 넓이를 자주 구하는 상황
function calcAreaCircle(r){
    const PI=3.14159256;
    const area=PI*(r**2);
    return area
    
}

//반지름 5
const a1=calcAreaCircle(5);
console.log(a1);