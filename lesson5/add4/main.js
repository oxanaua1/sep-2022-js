// - створити функцію, яка приймає три числа та виводить найменьше. (Без Math.min!)
// function foo(num1, num2, num3) {
//     if (num2 > num1 && num1< num3) {
//         console.log(num1);
//     } else if (num1 > num2 && num2< num3) {
//         console.log(num2);
//     } else if (num2 > num3 && num3< num1) {
//         console.log(num3);
//     }
// }
//
//
// foo(1,2,3);
// foo(2,1,3);
// foo(3,2,1);


// - створити функцію, яка приймає три числа та виводить найбільше. (Без Math.max!)
// function foo(num1, num2, num3) {
//     if (num2 < num1 && num1 > num3) {
//         console.log(num1);
//     } else if (num1 < num2 && num2 > num3) {
//         console.log(num2);
//     } else if (num2 < num3 && num3 > num1) {
//         console.log(num3);
//     }
// }
//
// foo(1, 2, 3);
// foo(2, 1, 3);
// foo(3, 2, 1);


// - створити функцію, яка повертає найбільше число з масиву
//
// function foo(array) {
//     let numberMax = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > numberMax) {
//             numberMax = array[i];
//         }
//     }
//     return numberMax;
// }
//
// console.log(foo([4, 8, 3]));
// console.log(foo([9, 8, 3]));
// console.log(foo([4, 8, 10]));

// - створити функцію, яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function foo(...array) {
//     let sum = 0;
//     let averNum;
//     for (const number of array) {
//         sum += number;
//
//     }
//     return averNum = sum / array.length;
//
// }
// console.log(foo(1, 2, 3, 4, 5));


// - створити функцію, яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

// function foo() {
//     let numMin = arguments[0];
//     let numMax = arguments[0];
//    
//     for (let i = 0; i < arguments.length; i++) {
//
//         if (arguments[i] < numMin) {
//             numMin = arguments[i];
//
//         }
//         if (arguments[i] > numMax) {
//             numMax = arguments[i]
//         }
//
//     }
//     console.log(numMax);
//     return numMin;
//
// }
//
// foo(-5, -2, 2, -4, -1); //NumMax 2
// console.log(foo(-5, -2, 2, -4, 1));//NumMin -5


// - створити функцію, яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//
// function foo(nmbsRandom) {
//     let array = [];
//     for (let i = 0; i < nmbsRandom; i++) {
//         array[i] = Math.round(Math.random() * 100);
//
//     }
//     console.log(array);
// }
//
// foo(10);

// - створити функцію, яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.

//
// function foo(limit, ...array) {
//     for (let i = 0; i < limit; i++) {
//         array[i] = Math.round(Math.random() * limit);
//
//     }
//     return array;
// }
//
// console.log(foo(20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//????????????????????????
// function foo(...array) {
//
//     let arrayReverse = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         for (let j = 0; j < arrayReverse.length; j++) {
//
//             array[length - 1] = arrayReverse [0];
//         }
//         console.log(array);
//
//     }
//     return  arrayReverse;
//
//
// }
//
// foo(1, 2, 3);
// console.log(foo(1, 2, 3));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або
// конкатенує їх між собою.
//
//
// function foo() {
//     if (arguments.length === 1) {
//         console.log(arguments);
//     } else if (arguments.length === 2) {
//         return arguments[0] + arguments[1];
//     }
//
// }
//
// foo(1);
// console.log(foo(1, 2));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає
// новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
