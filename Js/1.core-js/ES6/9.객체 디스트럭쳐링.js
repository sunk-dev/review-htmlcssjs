
const emp={
    empName:'뽀로로',
    age:4,
    hireDate:'2023-01-01',
    birthDay:'2020-01-01'
};

//객체 디스트럭쳐링

const {empName,age,hireDate,birthDay}=emp;
console.log(empName+age+hireDate+birthDay);


const {empName:en,age:a,birthDay:dd}=emp; //별명 지정가능!
console.log(`제이름은 ${en}이고 나이는 ${a}, 생일은 ${dd}`);

const {birthDay: bDay ,...others}=emp;
//...others->bitrhDay빼고 남은 애들 객체 처리

console.log(others);
//객체 복사
console.log('000000000000000000000000');
const copyEmp={
    ...emp,
    address:'청양군',
    hobbies:['산책','수영']
};
copyEmp.empName='루피';
console.log(copyEmp);