let foodList=['닭꼬치','볶음밥','짜장면','족발']
let findTarget='짜장면';

// for 문으로 구현하는 선형탐색
// let index=-1;
/* for(let i=0;i<foodList.length;i++){
    if(findTarget===foodList[i]){
        index=i;
        break;
    }
}
 */
/* console.log(`찾은 인덱스`,index);
 */
// indexOf:배열의 특정요소가 몇번 인덱스에 있는지 탐색
// 찾은 대상이 여러개 있을경우 맨 처음에찾은 인덱스 번호만 반환.
let index=foodList.indexOf(findTarget);

// include(): 배열의 특정요소가 존재하는지 논리여부 확인
let isPresent=foodList.includes('피자');
console.log(`존재여부 ${isPresent}`);

//slice():배열을 일정부분 잘라내여, 복사본 배열을 반환
foodList.push('오뎅','국밥');
console.log(foodList);
/* 앞에 3개만 추출 slice(시작인덱스,끝 인덱스) 시작인덱스~ (끝 인덱스 -1)의 카피본을 추출(즉, 원본은 변함없음)*/
let silcedFoodList=foodList.slice(0,3);
console.log(silcedFoodList);

let silcedFoodList2=foodList.slice(3); //3번부터 끝까지 카피본
console.log(silcedFoodList2);

/* 원본을 그대로 복사 */
let copyArr=foodList.slice();

/* reverse():배열을 역순으로 정렬=>  배열원본이 변함! */
console.log(`=============================`);
let arr1=[10,20,30];
let arr2=[1,3,5,7,9];

arr1.reverse();
console.log(arr1);
/* 원본변하지 않게 하는법-> 카피본은 뒤집는다 */
let copyArr1=arr1.slice();
copyArr1.reverse();

/* concat():배열 2개를  결합, 결합한 사본을 리턴->원본 변화 없음 */
let concated=arr1.concat(arr2)
console.log(concated);

/* splice(): 배열의 특정요소를 제거 삽입, 원본에서 직접작용 */
console.log(`foodList: ${foodList}`);
/* foodList.splice(지우기시작할 인덱스,지울 개수); */
foodList.splice(2,1);//2번 인덱스부터 1개 지우기;
console.log(`foodList.splice(2,1); 결과`, foodList);

/* foodList.splice(지우기시작할 인덱스,지울 개수,그위치에 삽입될 객체); */
foodList.splice(0,1,'보쌈');
console.log(`foodList.splice(0,1,'보쌈');`, foodList);
/* 지울개수를 0으로 주면 중간 삽입 효과 */
foodList.splice(1,0,'마라탕');
console.log(`foodList.splice(1,0,'마라탕'); 결과`, foodList);

//splice(0):배열 전체 삭제
foodList.splice(0);
console.log(foodList);
/* 배열전체삭제 2 */
foodList=[];

 