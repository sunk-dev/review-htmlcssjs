// push, pop
let pets=['강아지','고양이','고슴도치']
// 배열 맨끝에 데이터 추가
pets.push('도마뱀');
pets.push('도마뱀','거북이','앵무새');
console.log(pets);
// 배열 중간에 데이터 추가
// 배열 맨첫위치에 데이터 추가
pets.unshift('얼룩말');
pets.unshift('소','양');
console.log(pets);

// 맨끝 데이터 지우기
let r1=pets.pop(); //맨끝 데이터 반환
console.log(pets);

// 맨첫데이터 제거
let s1=pets.shift();//데이터 반환
console.log(`s1 :${s1}`);