/* 객체(Object)는 0개 이상의 프로퍼티(property)로 구성된 집합 자료구조이며, 프로퍼티는 키(key)와 값(value)의 쌍으로 구성 */
let myPet={
    name:'뽀삐',
    age:3,
    favorite:['산책','간식'],
    kind:'진돗개',
    injection:true
};

let yourPet={
    name:'루루',
    age:5,
    favorite:['낮잠','츄르'],
    kind:'블랙러시안',
    injection:true
};
//객체에 저장된 데이터 참조하기 1
console.log(myPet.age);
//객체에 저장된 데이터 참조하기 2
//대괄호 안은 반드시 문자열로!
console.log(myPet['injection']);

