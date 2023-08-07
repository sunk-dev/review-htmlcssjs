const $btn=document.querySelector('button');

function trackHandler(){
    console.log('click');

}

$btn.addEventListener('click',trackHandler);

// let total=0;//이 for문이 돌아갈동안 클릭버튼 눌러도 콘솔창에 나타나지 않음 대신 스케줄링 대기열에 있다가 for문 끝나고 출력
// for(let i=0;i<1000000000;i++){
//     total+=i;
// }
// console.log(total);

//비동기
setTimeout(()=>{console.log(`1번`);},1000);
setTimeout(()=>{console.log(`2번`);},5000);
setTimeout(()=>{console.log(`3번`);},3000);

