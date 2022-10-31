//// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
////     Вивести кожну змінну за допомогою: console.log
let greeting = 'hello';
console.log(greeting);
let name = 'owu';
console.log(name);
let address = 'com';
console.log(address);
let country = 'ua';
console.log(country);
let num = 1;
console.log(num);
let num1 = 10;
console.log(num1);
let num2 = -999;
console.log(num2);
let num3 = 123;
console.log(num3);
const PI = 3.14;
console.log(PI);
let num4 = 2.7;
console.log(num4);
let num5 = 16;
console.log(num5);
let boo1 = true;
console.log(boo1);
let boo0 = false;
console.log(boo0);

//// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Oksana';
let middleName = 'Mykolaivna';
let lastName = 'K';
let person;

person = `${firstName} ${middleName} ${lastName}`;

console.log(person);

//// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//// Додаткове для тих хто цікавився prompt`oм
//// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль
let yourName = prompt(`pls write your name`);
let yourMiddleName = prompt(`pls write your middle name`);
let yourAge = prompt(`pls write your age`);

let newPerson = `${yourName} ${yourMiddleName} is ${yourAge} years old`
console.log(newPerson);





