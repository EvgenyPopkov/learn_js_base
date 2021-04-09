// 1. Number
const num = 5; // integer
const float = 5.55; // float
const pow = 5e5;

console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Infinity);
console.log(-Infinity);
console.log(isFinite(Infinity));
console.log(isFinite(1));

console.log(NaN); // typeof number
console.log(isNaN(1 / undefined));
console.log(isNaN('NaN'));
console.log(isNaN(1));

const stringInt = '5';
const stringFloat = '5.5';
console.log(parseInt(stringInt) + 1);
console.log(Number(stringInt) + 1);
console.log(+stringInt + 1);
console.log(parseInt(stringFloat) + 1.1);
console.log(parseFloat(stringFloat) + 1.1);
console.log(+stringFloat + 1.1);

console.log(0.4 + 0.2); // 0.6000000000000001
console.log((0.4 + 0.2).toFixed(4)) //0.6000 (string)
console.log(parseFloat((0.4 + 0.2).toFixed(4))) //0.6 (number)

//------------------------------------

// 2. BigInt
console.log(typeof 9007199254740991); // number (MAX_SAFE_INTEGER)
console.log(typeof 9007199254740991n); // bigint

console.log(9007199254740991n - 9007199254740990n);
console.log(9007199254740991n * 2n);
// console.log(9007199254740991n * 2); // error
// console.log(9007199254740991.646456n); //error
console.log(10n - BigInt(4));

//------------------------------------

// 3. Math
console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25));
console.log(Math.abs(-5));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.round(5.5));
console.log(Math.floor(5.5));
console.log(Math.ceil(5.5));
console.log(Math.trunc(5.5));
console.log(Math.trunc(-5.5));
console.log(Math.floor(-5.5));

console.log(Math.random());
const getRandomBetween = (min, max) => Math.random() * (max - min) + min;
const getRandomBetweenInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(getRandomBetween(1, 5));
console.log(getRandomBetweenInt(1, 5));