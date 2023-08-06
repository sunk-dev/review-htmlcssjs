// 
let food=['김치찌개','된장찌개','갈비탕','족발'];
// indexOf:배열의 특정요소가 몇번 인덱스에 있는지 탐색
let findTarget='족발';
let inedex=food.indexOf(findTarget);
console.log(`찾은 인덱스 ${inedex}`);
// include():배열의 특정요소가 존재하는지 논리여부 확인
let isInclude=food.includes('된장찌개');
console.log(`존재여부: ${isInclude}`);
// slice
let slicedFood=food.slice(0,3);//0번인덱스부터 2번 인덱스까지
console.log(slicedFood);
//
let slicedFood2=food.slice(3); //3번 인덱스부터 끝까지

//원본배열 그대로 복사
let copyArr=food.slice();
console.log(copyArr);
//reverse():배열을 역순으로 정렬
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,10]
arr1.reverse() //원본배열 자체를 변환
console.log(arr1);

// 원본을 파괴하지 않고 reverse 효과 
let arr2Copy=arr2.slice();//원본배열 복사
arr2Copy.reverse();
console.log(arr2);
console.log(arr2Copy);

// concat():배열 2개를 결합, 결합한 사본을 리턴
let concated=arr1.concat(arr2);
console.log(concated);

//★ splice(startindex,deleteCount):배열의 특정요소 제거,삽입 원본에 직접 작용
food.splice(3,1);
// 수정 0번 인덱스 부터 1개 삭제하고 거기에  보쌈 추가
food.splice(0,1,'보쌈');

// 삽입: delecount=0으로 설정
food.splice(1,0,'마라탕');
console.log(food);

//전체삭제
food.splice(0);
food=[];
console.log(food);

