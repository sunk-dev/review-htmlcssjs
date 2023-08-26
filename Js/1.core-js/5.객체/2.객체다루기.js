let phone={
    company:'삼성',
    color:'white',
    model:'갤럭시 s23',
    price:1200000
};

//프로퍼티 값 수정
phone.company='애플';
phone['model']='아이폰 xr';
console.log(phone);

//프로퍼티 동적 추가
phone.madeDate='2022-01-01';
console.log(phone);

//프로퍼티 동적 삭제 
delete phone.madeDate;
console.log(phone);

//★객체 반복문 for~in
//+ 배열 반복문 for~of
for (let p in phone){
    console.log(p);//키가 반복됨
     console.log(phone[p]);//값을 얻어내는 법 무조건 대괄호 방법으로만 호출가능! 
}
/* 객체에 key 존재 유무 확인 */
let flag='model' in phone;
console.log(flag);

let key='company';
if(key in phone){
    console.log(`키 값을 수정합니다.`);
}else{
    console.log(`키를 새로 추가합니다.`);
}