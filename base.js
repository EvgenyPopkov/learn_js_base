// https://developer.mozilla.org/ru/docs/Web/JavaScript
// 1. Переменные
// camelCase
const firstName = 'Evgeny'; // string
const age = 18; // number
const isCoder = true; // boolean
let test = 'test';
test = 5;
test = true;
test = null;
test = undefined;
test = {};
test = 5n;
test = Symbol('test');
console.log(test.description);

const _ = '_';
const $ = '$';
const numeral5 = 5;

// error
// const for = 'for'; 
// const if = 'if';
// const 5numeral = 5;

//------------------------------------

// 2. Мутирование
console.log('Name: ' + firstName + ', age: ' + age);
console.log(age + ' age');
const lastName = prompt('Enter your last name');
alert('Name: ' + firstName + ', Last name: ' + lastName);
console.log(`Name: ${firstName}, Last name: ${lastName}`);

//------------------------------------

// 3. Операторы
let a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(b % a);

console.log(a++);
console.log(++a);
console.log(a += 1);
console.log(a -= 1);
console.log(a *= 2);
console.log(a /= 2);
console.log(--a);

console.log(b ** 3);
console.log(3e5);

// битовые операторы
console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);
console.log(a << 2);
console.log(a >> 2);
console.log((a + b) >>> 2);

console.log(5 == '5'); // true
console.log(5 === '5'); // false

//------------------------------------

// 4. Типы Данных
const typeNumber = 5;
const typeString = 'string';
const typeBoolean = true;
const typeBigInt = 5n;
const typeSymbol = Symbol('Symbol');
const typeObject = {};
const typeNull = null;
let typeUndefined;

console.log(typeof typeNumber);
console.log(typeof typeString);
console.log(typeof typeBoolean);
console.log(typeof typeBigInt);
console.log(typeof typeSymbol);
console.log(typeof typeObject);
console.log(typeof typeUndefined);
console.log(typeof typeNull); // object
console.log(typeNull); // null

//------------------------------------

// 5. Приоритет операторов
const currentYear = 2000;
const birthYear = 1990;
const fullAge = 9;

const isFullAge = currentYear - birthYear >= fullAge;
console.log(isFullAge);

const isFullAgeX2 = (currentYear - birthYear) * 2 >= fullAge;
console.log(isFullAgeX2);

const notIsFullAgeX2 = !((currentYear - birthYear) * 2 >= fullAge);
console.log(notIsFullAgeX2);

//------------------------------------

// 6. Условный оператор
const status = 'ready'; // ready, pending, fail

if (status === 'ready') {
  console.log('ready');
};
if (status === 'pending') {
  console.log('pending');
};
if (status === 'fail') {
  console.log('fail');
};

if (status === 'ready') {
  console.log('ready');
} else if (status === 'pending') {
  console.log('pending');
} else {
  console.log('fail');
};

switch (status) {
  case 'ready':
    console.log('ready');
    break;
  case 'pending':
    console.log('pending');
    break;
  default:
    console.log('fail');
};

console.log(status === 'ready' ? 'ready' : status === 'pending' ? 'pending' : 'fail');
console.log(status ? 'ok' : 'bad');

const badStatus = undefined; // null, 0, false, ''
console.log(badStatus ? 'ok' : 'bad'); // bad

//------------------------------------

// 7. Булевая логика
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log(!!true);

//------------------------------------

// 8. Функции
function calculateAge(year) {
  return 2000 - year;
};

console.log(calculateAge(1980));

function logInfo(name, year) {
  const age = calculateAge(year);
  console.log(age > 0 ? `${name}, age: ${age}` : 'error');
};

logInfo('Evgeny', 1982);
logInfo('Evgeny', 2001);

//------------------------------------

// 9. Массивы
const cars = new Array('BMW', 'Mercedes', 'Audi');
console.log(cars);

const cars2 = ['BMW', 'Mercedes', 'Audi'];
console.log(cars2);
console.log(typeof cars2); // object
console.log(cars2.length);
console.log(cars2[2]);

cars2[0] = 'Toyota';
cars2[3] = 'Mazda'; // add
cars2[cars2.length] = 'Nissan'; // add
console.log(cars2);

//------------------------------------

// 10. Циклы
const cars3 = ['BMW', 'Mercedes', 'Audi'];

for (let i = 0; i < cars3.length; i++) {
  console.log(cars3[i]);
};

for (const car of cars3) {
  console.log(car);
};

let i = 0;
while (i < cars3.length) {
  console.log(cars3[i]);
  i++;
};

//------------------------------------

// 11. Объекты
const person = new Object();
person.firstName = 'Evgeny';
person.age = 18;

const person2 = {
  firstName: 'Evgeny',
  age: 18,
  lang: ['ru', 'en', 'de'],
  log: function () {
    //console.log(`name: ${firstName}, age: ${age}`); // error
    console.log(`name: ${this.firstName}, age: ${this.age}`);
  }
};

person2.log();
console.log(person2);

person2.isCoder = true;
console.log(person2);