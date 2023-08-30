//전역변수 : 프로그램 전체에서 사용 가능
//같은 영역에서는 같은 이름을 선언 불가!
let x=10;

function foo(z){
    let x=30;
    let y=20+x; // -> 지역변수: 함수 안에서만 사용 가능
    
    console.log(`지역변수 x선언후 ${x}`);
    console.log(y-z);
}

foo(17);
console.log(`함수 바깥쪽 x: ${x}`);

// 중첩함수 :함수안에 함수를 또 정의한 형태
console.log(`============중첩함수=========`);

function outer(m){//m에 'outer param m'들어감
    let n= 'outer local n';
    let v= 'outer local v';
    console.log(m);//매개변수 우선참조
    console.log(n);
    console.log(v);

    //헬퍼함수:함수안에 들어있는 함수 :헬퍼함수를 포함함 함수 안에서만 호출 가능
    function inner(){
        console.log(n);
        let m='inner local m';
        let v='inner local v';
        console.log(m);
        console.log(v);
    }
    inner();
}
let m ='global m'; //1
outer('outer param m');//2

// 블록스코프
let k=100;
for (let k=0;k<3;k++){
    console.log(`for문 안에서의 k ${k}`);
}

console.log(`for문 밖에서의 ${k}`);

