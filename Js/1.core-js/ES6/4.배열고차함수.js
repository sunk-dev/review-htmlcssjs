const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
  },
];

// 4명의 회원 중 취미가 딱 2개인 사람들만 필터링해주세요.
// 취미가 2개인 사람만 모아서 배열에 다시 담아줘

function filterByHas2Hobby() {
  const filteredArray = [];
  for (let user of userList) {
    if (user.hobbys.length === 2) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 서울 사는 사람들만 필터링해서 새로운 배열에 담아줘
function filterUserLivedInSeoul() {
  const filteredArray = [];
  for (let user of userList) {
    if (user.address === '서울') {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 콜백을 이용한 필터링 함수
function filter(condition) {
  const filteredArray = [];
  for (let user of userList) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// const results1 = filter(user => user.hobbys.length >= 3);
// console.log(results1);

const results2 = filter(
  (user) => user.address === '서울' && user.job === '게이머'
);
console.log(results2);

// const hobby2 = filterByHas2Hobby();
// console.log(hobby2);

// const liveInSeoul = filterUserLivedInSeoul();
// console.log(liveInSeoul);

// 회원정보중에 회원 이름만 전부 모아서 배열에 담아줘
// 매핑
function map(callback) {
  // 이름을 담을 배열
  const mappedArray = [];
  for (const user of userList) {
    mappedArray.push(callback(user));
  }
  return mappedArray;
}
console.log('=========================');
const nameList = map((user) => user.userName);
console.log(nameList);

const addressList = map((user) => user.address);
console.log(addressList);
const foodList = ['짜장면', '제육볶음', '치킨'];
foodList.forEach((food) => console.log(`${food} 맛있어요`));

//배열고차함수 :filter
//특정 조건에 의해 필터링된 새로운 배열을 반환
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = numbers.filter((n) => n % 3 == 0);
console.log(newArr);

//회원중 아이디가 abc1234인 사람을 필터링하기
const newUsetList = userList.filter((usr) => usr.account === 'abc1234');
console.log(newUsetList);

//배열 고차함수 :map
//특정배열에서 특정 조건에 맞는 값들만 따로 모아서
//새롭게 매핑한 배열을 반환

console.log('----------map---------------------');
const doubled = numbers.map((n) => n ** 2);
console.log(doubled);

const plusTwo = numbers.map((n) => n + 2);
console.log(plusTwo);

const userFirsthobby = userList.map((usr) => usr.hobbys[0]);
console.log(userFirsthobby);

//filter->10개 짜리 배열에서 조건에 맞는 몇개만 추출
//필터의 결과 배열<= 원래의 배열 개수

//map-> 10개 짜리 배열에서 특정재로 10개를 전부매핑
//map의 결과 배열==원래 배열 개수
// 배열요소중에서 특정한 값만 추출해서 보고 싶을때

//회원목록(4명)에서 회원의 이름과 주소만 추출하고 싶음
const prettierUserList = userList.map((u) => {
  return {
    userName: u.userName,
    addr: u.address,
  };
});
console.log(prettierUserList);
console.log('=========================');

const appleBasket = [{
    color: 'green',
    sweet: 13
  },
  {
    color: 'red',
    sweet: 14
  },
  {
    color: 'red',
    sweet: 11
  },
  {
    color: 'green',
    sweet: 6
  },
  {
    color: 'green',
    sweet: 7
  },
  {
    color: 'green',
    sweet: 9
  },
];
//사과중에 녹색이면서 당도가 9이상인 사과만 선별해서 
//이사과는 xxx색이면서 당도는 xxx입니다. 라는 문자열이 매핑되어있는 배열을 리턴

const mappedApples=appleBasket.filter(apple=>apple.color==='green'&&apple.sweet>=9)
.map(apple=>`이사과는 ${apple.color}이고 당도는 ${apple.sweet} 입니다`)
.forEach(a=>console.log(a));

//회원목록에서 서울에사는 회원들의
//  두번째 취미만 배열에 모아서 XXX회원님의 두번째취미는oo입니다.반복출력
const livedSeoulSecondHobby=
userList.filter(user=>user.address==='서울')
.map(user=>`${user.userName}회원님의 두번째 취미는 ${user.hobbys[1]}`)
.forEach(h=>console.log(h));