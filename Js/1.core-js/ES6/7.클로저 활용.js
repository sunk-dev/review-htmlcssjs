/*
const increase=(()=>{
    let count=0;
    return ()=>++count;
})();

const decrease=(()=>{
    let count=0;
    return ()=>--count;
})();
*/
/*
const countClosure=()=>{
    let count=0;
    const increase=()=>++count;
    const decrease=()=> --count;

    return {
        increase,
        decrease
    };
};


const counter=countClosure(); //객체가 리턴됨.
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
*/

const {increase,decrease}=(()=>{
    let count=0;
    return {
        increase:()=>++count,
        decrease:()=>--count
    };
})();

console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());
console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());
