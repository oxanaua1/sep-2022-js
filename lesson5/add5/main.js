// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const min = (num1, num2, num3) => {
//     if (num2 > num1 && num1< num3) {
//         console.log(num1);
//     } else if (num1 > num2 && num2< num3) {
//         console.log(num2);
//     } else if (num2 > num3 && num3< num1) {
//         console.log(num3);
//     }
// }
// min(1,-3,-5);
//


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// const max = (num1, num2, num3) => {
//         if (num2 < num1 && num1 > num3) {
//         console.log(num1);
//     } else if (num1 < num2 && num2 > num3) {
//         console.log(num2);
//     } else if (num2 < num3 && num3 > num1) {
//         console.log(num3);
//     }
// }
//
// max(1,2,4);

// - створити функцію яка повертає найбільше число з масиву
// const maxNum = (array) => {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {
//             max = array[i];
//         }
//
//     }
//     return max;
// }
// console.log(maxNum([4, 8, 3]));
// console.log(maxNum([9, 8, 3]));
// console.log(maxNum([4, 8, 10]));

// - створити функцію яка повертає найменьше число з масиву

// const minNum = (array) => {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         }
//
//     }
//     return min;
//
// }
//
// console.log(minNum([4, 8, -3]));
// console.log(minNum([9, 8, 3]));
// console.log(minNum([4, 8, 10]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

// const arr = (...arguments) => {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(arr(1, 2, 10));


// - Дано натуральное число n. Выведите все числа от 1 до n.

// const number = (n, ...array) => {
//     for (let i = 1, j = 0; i <= n;) {
//         array[j] = i++
//         j++;
//     }
//     return array
// }
//
//
// console.log(number(10));


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

// const foo = (a, b, ...array) => {
//
//     if (a < b) {
//         for (let i = a, j = 0; i <= b; i++) {
//
//             array[j] = i;
//             j++;
//
//         }
//     }
//
//     if (a > b) {
//         for (let i = a, j = 0; i >= b; i--) {
//
//             array[j] = i;
//             j++;
//
//         }
//
//     }
//     return array;
//
// }
//
// console.log(foo(1, 6));
// console.log(foo(6, 1));


// - функція Приймає масив та число "i", та міняє місцями об`єкт, який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

//
// const foo = (i, ...array) => {
//     let j = array[i];
//     let k = array[i + 1]
//     if (j || k) {
//         array[i] = k;
//         array[i + 1] = j;
//
//     }
//
//
//     return array;
//
// }
//
// console.log(foo(0, 9, 8, 0, 4));// ==> [ 8, 9, 0, 4 ]
// console.log(foo(1, 9, 8, 0, 4));// ==> [ 9 ,0, 8, 4 ]
// console.log(foo(2, 9, 8, 0, 4));// ==> [ 9, 8, 4, 0 ]


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець масиву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

//
// function foo(array) {
//     let newArr = [];
//     let n = 0;
//
//     for (let i = 0, j = 0; i < array.length; i++) {
//         newArr[i] = n;
//
//         if (array[i]) {
//             newArr[j++] = array[i];
//         }
//     }
//
//     return newArr;
// }
//
//
// console.log(foo([1, 0, 6, 0, 3]));
// console.log(foo([0, 0, 1, 0]));
// console.log(foo([0, 1, 2, 3, 4]));
// console.log(foo([0, 0, 0, 0, 0, -4, 7, 7]));