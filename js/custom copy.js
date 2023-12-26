// const변수안에는 값이 변하는 거 넣으면 안됨.
// 
const BTN = document.querySelector('button');
const H1 = document.querySelector('h1');

console.log(BTN);


//function()  대체   () =>
const Toggle = () =>  H1.classList.toggle('on')
BTN.addEventListener('click', Toggle);

// fuction 함수는 순서에 상관없이 먼저 실행이된다.

const Kim_Name = '김영석';
const Kim_Age = 27;
const Kim_Wife = '없습니다';

const Kim = {
    name:'김영석',
    // 객체 숫자는 ,안씀
    age: 27,
    wife: '없습니다'
}

console.log(Kim.name, Kim['name']);

const Ddal = ['김이석','김삼석'];

console.log(Ddal[0]);

const ShopData = [
    {name:'김영석', age:27, id:1},
    {name:'김이석', age:40, id:2},
    {name:'김삼석', age:50, id:3},
    {name:'김사석', age:60, id:4},
]

const overAge = ShopData.filter(it => it.age > 49);

console.log(overAge);

const SHOP = document.querySelector('#N');
const SHOPDATE = ShopData.map(it => '<li>${it.name}</li>').join('');
SHOP.innerHTML = SHOPDATE;

