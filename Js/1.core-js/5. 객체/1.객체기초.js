//20230814 복습

//객체란
let myPet={
    name:'뽀삐',
    age:3,
    favorite:['산책','간식'],
    kind:'진돗개',
    injection:true
};

let yourPet={
    name:'뭉치',
    age:4,
    favorite:['산책','낮잠'],
    kind:'블랙러시안',
    injection:false,
    'hate-food':'양념게장'
};
//
console.log(typeof myPet);

//객체에 저장된 데이터(프로퍼티) 참조
console.log(myPet.kind);
console.log(yourPet.kind);
console.log(yourPet.name);
console.log(myPet.name);
console.log(yourPet.favorite);

console.log(myPet.age*yourPet.age);
console.log(yourPet.favorite[0]);

myPet.favorite.push('꼬리흔들기');

console.log(myPet.favorite);

//키값쌍=>프로퍼티

//프로퍼티 참조 2
console.log('----------------프로퍼티 참조 2--------------------');
console.log(`객체이름['키']`);
console.log(myPet['injection']);
console.log(`키는 특수기호 쓸수 있음.-> 이럴땐 키값을 따옴표로 감싸주기,참조는 2번 방식으로만 가능!`);
console.log(yourPet['hate-food']);


let myPetname='name';
console.log(myPet[myPetname]);


