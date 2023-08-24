let phone = {
  company: "삼성",
  model: "갤럭시s5",
  color: "펄 화이트",
  price: 120000,
};

console.log("=============프로퍼티 값 수정 ==================");

phone.company = "애플";
phone["model"] = "아이폰 xr";
console.log(phone);

//프로퍼티 동적 추가
phone.madeDate = "2023-08-14";
console.log(phone);

//프로퍼티 동적 삭제
delete phone.price;
console.log(phone);

// 객체의 반복문 for~ in
// 배열특유의 반복문 for ~of
for (let x in phone){
    console.log('여기서 x는 키');
    console.log(`phone.x 는 undefined-> 이유 x 타입은 String-> 
    ex)phone.x== phone.'model' ->에러남. 따라서 대갈호 참조이용해야함`);
    console.log(phone[x]);


}

//객체에 키 존재 유무 확인 
let flag= 'model' in phone; //키를 문자열로 넣어야함.
console.log(flag);

let key='fruits';
if(key in phone){
    console.log('수정하는 거 맞죠?');
}
else{
    console.log('추가할꺼에요!');
}
