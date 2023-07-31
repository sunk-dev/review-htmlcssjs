//두 번째 괄호가 제대로 동작하려면 첫 번째 괄호는 반드시 함수를 반환해야 합니다.

function sum(a) {

    return function(b) {
      return a + b; // 'a'는 외부 렉시컬 환경에서 가져옵니다.
    };
  
}
