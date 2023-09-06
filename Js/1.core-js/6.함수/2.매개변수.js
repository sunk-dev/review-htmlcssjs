//매개변수(parameter)
//함수를 정의 할때 함수 바깥쪽에서 안쪽으로 들어오는 
//데이터를 저장하는 함수

//x-y까지의 누적합을 구하는 함수
//변수 이름 잘 짓기,함수 설명 잘 적어두기
/* descripttion:X~Y까지의 누적합
parameter
:- begin:누적합을 구할 시작값
- end: 누적합을 구할 끝값
return: brgin과 end 사이의 정수의 총합
 */
function calcAccmulateSum(begin,end){
    let total=0;
    for(let i=begin;i<=end;i++){
        total+=i;
    }
    return total;
}

const result=calcAccmulateSum(3,5);
console.log(result);

//매개변수의 기본값
function sayHello(lang='한국어'){
    if(lang==='한국어'){
        console.log('안녕하세요!');
    }
    else if(lang==='영어'){
        console.log('Hello');
    }
    else{
        console.log('리스트에 있는 언어가 아니에요!!');
    }
}

sayHello('한국어');
sayHello('영어');
sayHello();
