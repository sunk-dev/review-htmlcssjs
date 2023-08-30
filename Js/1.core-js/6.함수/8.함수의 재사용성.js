const NOT_FOUND=-1;
let foods=['짬뽕','초밥','김치찌개','족발'];

//배열에서 특정요소가 어디 인덱스에 있는지 인덱스를 반환
function myIndexOf(array,searchElement){
    for(let i=0;i<array.length;i++){
        if(searchElement===array[i]) return i;
    }
    return NOT_FOUND;//아무것도 못찾았을때 반환되는 값.
}

let index=myIndexOf(foods,'족발');
console.log(`찾은 인덱스 ${index}`);

//배열에서 특정요소가 존재하는지 유무확인
function myIncludes(array,searchElement){
    return myIndexOf(array,searchElement) !== NOT_FOUND;
    // myIndexOf(array,searchElement)가 NOT_FOUND 와 다르면 true 반환.

}

let isPresent=myIncludes(foods,'김치찌개');
console.log(`존재유무 : ${isPresent}`);
