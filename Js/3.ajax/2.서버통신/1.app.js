
//서버와 통신하기
const xhr=new XMLHttpRequest();
console.log(xhr);

//통신 정보를 전달
 /*
  HTTP method
  - GET: 리소스를 조회 (게시물 조회, 마이페이지 회원정보 조회)
  - POST: 리소스를 등록 (게시물 쓰기, 회원가입, 장바구니담기)
  - PUT: 리소스를 일괄수정 (게시물의 모든정보를 통채로 수정)
  - PATCH: 리소스를 일부수정 (게시물의 제목만 수정)
  - DELETE: 리소스를 삭제 (게시물 지우기, 회원탈퇴, 좋아요 취소)
  */


//요청정보 초기화(초기값 세팅)
xhr.open("GET",'https://jsonplaceholder.typicode.com/posts');

//요청 보내기
xhr.send();

//응답 데이터 가져오기
xhr.onload=e=>{
    //요청이 끝난후 xhr객체를 보면 응답정보가 들어와있음.
    //console.log(xhr);
    //서버에서 온 데이터는 json이다
    //따라서 js에서 사용하려면 json을 js로 변환해야한다.

    //JSON->JS : JSON.parse();
    //JS->JSON: JSON>.stringify();
    const postList=JSON.parse(xhr.response);

    postList.forEach(post => {
        const $postLi=document.createElement('li');
        $postLi.classList.add('post-item');
        $postLi.innerHTML=`    
            <h2>${}</h2>
            <p></p>
            <button>Delete</button>

        `; 
        
    });
};