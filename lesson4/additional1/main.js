// // --створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
// let arrNum = [];
// for (let i = 0; i < 5; i++) {
//     arrNum[i] = i;
// }
// console.log(arrNum);
//
//
// let arrString = [];
// for (let i = 0; i < 5; i++) {
//     arrString[i] = `${i}`;
//
// }
// console.log(arrString, typeof arrString[0]);
//
// let arrBooStrNum = [];
// for (let i = 0; i < 5; i++) {
//     if (i <= 1) {
//         arrBooStrNum[i] = `${i}`
//
//     } else if (i >= 2 && i <= 3) {
//         arrBooStrNum[i] = i;
//     } else {
//         arrBooStrNum[i] = true;
//     }
//
// }
//
// console.log(arrBooStrNum,
//     typeof arrBooStrNum[0],
//     typeof arrBooStrNum[1],
//     typeof arrBooStrNum[2],
//     typeof arrBooStrNum[3],
//     typeof arrBooStrNum[4]
// );
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let users = [];
//
// for (let i = 0; i < 6; i++) {
//
//     users[0] = 'a'
//     users[1] = 'b'
//     users[2] = 'c'
//     users[3] = 'd'
//     users[4] = 'e'
//     users[5] = 'f'
//
// }
//
// console.log(users);
//
// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// // 1. перебрати його циклом while
//
// let i = 0;
// while (i < numArr.length) {
//
//     console.log(numArr[i]);
//
//     i++;
// }
// // 2. перебрати його циклом for
// for (const number of numArr) {
//     console.log(number);
// }
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// console.log(numArr);
// let j = 0;
// while (j < numArr.length) {
//     if (j % 2 !== 0) {
//         console.log(numArr[j]);
//     }
//     j++
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// console.log(numArr);
// for (let k = 0; k < numArr.length; k++) {
//
//     if (k % 2 !== 0) {
//         console.log(numArr[k])
//     }
// }
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// console.log(numArr);
// let u = 0;
// while (u < numArr.length) {
//     if (numArr[u] % 2 === 0) {
//         console.log(numArr[u]);
//     }
//     u++
// }
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// console.log(numArr);
// for (const number of numArr) {
//     if (number % 2 === 0) {
//         console.log(number);
//
//     }
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// // let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let g = 0; g < numArr.length; g++) {
//     const numArrElement = numArr[g];
//     if (numArrElement % 3 === 0) {
//         console.log(numArrElement);
//         numArr[g] = "okten";
//     }
// }
// console.log(numArr);
//
// //8. вивести масив в зворотньому порядку.
//
// let numArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let newNumArray = [];
//
// for (let q = numArray.length - 1, f = 0; q >= 0; q--, f++) {
//
//     newNumArray [f] = numArray[q];
//
// }
// console.log(newNumArray);


////9. всі попередні завдання (окрім 8), але в зворотньому циклі (ззаду наперед)
//______________________________________________________________________________________________________________________

// // 1 ) створити масив з:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль

// let arrNum = [];
//
// for (let i = 5; i >= 0; i--) {
//     arrNum[i] = i;
// }
//
// console.log(arrNum);


// let arrString = [];
// for (let i = 5; i >= 0; i--) {
//     arrString[i] = `${i}`;
//
// }
// console.log(arrString, typeof arrString[0]);
//

// let arrBooStrNum = [];
// for (let i = 5; i >= 0; i--) {
//     if (i >= 4 && i <= 5) {
//         arrBooStrNum[i] = `${i}`
//
//     } else if (i >= 2 && i <= 3) {
//         arrBooStrNum[i] = i;
//     } else {
//         arrBooStrNum[i] = i === 1   ;
//     }
//
// }
//
// console.log(arrBooStrNum,
//     typeof arrBooStrNum[0],
//     typeof arrBooStrNum[1],
//     typeof arrBooStrNum[2],
//     typeof arrBooStrNum[3],
//     typeof arrBooStrNum[4]
// );
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
// let users = [];
//
// for (let i = 6; i >= 0; i--) {
//
//     users[0] = 'a'
//     users[1] = 'b'
//     users[2] = 'c'
//     users[3] = 'd'
//     users[4] = 'e'
//     users[5] = 'f'
//
// }
//
// console.log(users);
//
// // - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while

// let i = numArr.length - 1;
// while (i >= 0) {
//
//     console.log(numArr[i]);
//
//     i--;
// }

// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// console.log(numArr);
// let j = numArr.length - 1;
// while (j >= 0) {
//     if (j % 2 !== 0) {
//         console.log(numArr[j]);
//     }
//     j--
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// console.log(numArr);
// for (let k = numArr.length-1; k >=0 ; k--) {
//
//     if (k % 2 !== 0) {
//         console.log(numArr[k])
//     }
// }

// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// console.log(numArr);
// let u = numArr.length - 1;
// while (u >= 0) {
//     if (numArr[u] % 2 === 0) {
//         console.log(numArr[u]);
//     }
//     u--;
// }
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// console.log(numArr);
// for (let i = numArr.length - 1; i >= 0; i--) {
//
//     if (numArr[i] % 2 === 0) {
//         console.log(numArr[i]);
//     }
//
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// let numArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let g = numArr.length - 1; g >= 0; g--) {
//     const numArrElement = numArr[g];
//     if (numArrElement % 3 === 0) {
//         console.log(numArrElement);
//         numArr[g] = "okten";
//     }
// }
// console.log(numArr);

//_____________________________________________________________________________________________________________________





// //- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let numbers = [10, -20, 100, 0.5, 10500, 300, 400, 4, 8, 33];
// for (const number of numbers) {
//         console.log(number);
// }
//
//
// //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let fruits = ['Apple', 'Banana', 'Apricot', 'Nectarine', 'Oranges', 'Grape', 'Mango', 'Papaya', 'Pineapple', 'Kiwi'];
// for (const fruit of fruits) {
//         console.log(fruit);
// }
//
// //- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let array = [10, -20, 'Apple', 'Banana', 100, 'Grape', 0.5, true, 11, false];
// let i = 0;
// while (i < array.length) {
//
//     console.log(array[i]);
//     i++;
// }
//
// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [10, -20, 'Apple', 'Banana', 100, 'Grape', 0.5, true, 11, false];
//
// for (const element of array) {
//     if (typeof element === "boolean") {
//         console.log(element);
//     }
// }
// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [10, -20, 'Apple', 'Banana', 100, 'Grape', 0.5, true, 11, false];
// for (const element of array) {
//     if (typeof element === "number") {
//         console.log(element);
//     }
// }
//
// //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [10, -20, 'Apple', 'Banana', 100, 'Grape', 0.5, true, 11, false];
// for (const element of array) {
//     if (typeof element === "string") {
//         console.log(element);
//     }
// }
//
// //- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// //Вивести в консоль всі його елементи в циклі.
//
// let arr = [];
//
// for (let i = 0; i < 10; i++) {
//     if (i <= 3) {
//         arr[i] = i
//
//     } else if (i >= 4 && i <= 7) {
//         arr[i] = `${i}`
//
//     } else arr[i] = i === 8;
//
// }
//
// console.log(arr);
//
// //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//
//     console.log(i);
//     document.write(`\n ${i}`);
// }
//
//
// let i = 0;
// while (i < 10) {
//
//     console.log(i);
//     document.write(`${i}`);
//
//     i++;
// }
//
//
// //- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//
//     console.log(i);
//     document.write(`\n ${i}`);
// }
//
// let i = 0;
// while (i < 100) {
//
//     console.log(i);
//     document.write(`\n ${i}`);
//
//     i++;
// }
// //- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i+=2) {
//
//     console.log(i);
//     document.write(`\n ${i}`);
// }
//
// //- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`\n ${i}`);
//     }
//
// }
//
// //- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//
//     if (!(i % 2 === 0)) {
//         console.log(i);
//         document.write(`\n ${i}`);
//     }
// }
//
// //стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let books = [
//     {
//         name: 'You are the only one',
//         page: 500,
//         genre: ['Romance', 'Detective'],
//         author: [{name: 'Dan White'}]
//     },
//     {
//         name: 'Another world',
//         page: 600,
//         genre: ['Romance', 'Detective', 'Fantasy'],
//         author: [{name: 'Jack Black'}, {name: 'Dan White'}, {name: 'Keven Klone'}],
//     },
//     {
//         name: 'Good night',
//         page: 100,
//         genre: ['Thriller'],
//         author: [{name: 'Ivan Navi'}]
//     },
//     {
//         name: 'At any time',
//         page: 200,
//         genre: ['Fantasy', 'Detective', 'Thriller', 'Fiction'],
//         author: [{name: 'Ivan Navi'}, {name: 'Dan White'}]
//     }
//
// ]
// console.log(books);
//
// // -знайти найбльшу книжку.
//
// let pageMax = books[0];
//
// for (const book of books) {
//     if (book.page > pageMax.page) {
//         pageMax = book
//     }
// }
// console.log(pageMax);
//
//
// // - знайти книжку/ки з найбільшою кількістю жанрів
//
// let genreMax = books[0];
//
// for (const book of books) {
//     if (book.genre.length > genreMax.genre.length) {
//         genreMax = book
//     }
//
// }
// console.log(genreMax);
//
//
// // - знайти книжку/ки з найдовшою назвою
// let nameMax = books[0]
// for (const book of books) {
//     if (book.name.length > nameMax.name.length) {
//         nameMax = book
//     }
//
// }
// console.log(nameMax);
//
// // - знайти книжку/ки які писали 2 автори
//
// let twoAuthBook = books[0];
//
// for (const book of books) {
//     if (book.author.length === 2) {
//         twoAuthBook = book
//
//     }
// }
// console.log(twoAuthBook);
//
//
// // - знайти книжку/ки які писав 1 автор
//
// let oneAuthBook = books[0];
//
// for (const book of books) {
//     if (book.author.length === 1) {
//         oneAuthBook = book
//
//     }
// }
// console.log(oneAuthBook);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //---------------------------------------------------------------------------------------------------------------------
// //(Моє)
// //- знайти книжкки які писали 2 автори і додати в новий масив
//
// // let books1 = [
// //     {
// //         name: 'You are the only one',
// //         page: 500,
// //         genre: ['Romance', 'Detective'],
// //         author: [{name: 'Dan White'}, {name: 'Keven Klone'}]
// //     },
// //     {
// //         name: 'Another world',
// //         page: 600,
// //         genre: ['Romance', 'Detective', 'Fantasy'],
// //         author: [{name: 'Jack Black'}, {name: 'Dan White'}, {name: 'Keven Klone'}],
// //     },
// //     {
// //         name: 'Good night',
// //         page: 100,
// //         genre: ['Thriller'],
// //         author: [{name: 'Ivan Navi'}]
// //     },
// //     {
// //         name: 'At any time',
// //         page: 200,
// //         genre: ['Fantasy', 'Detective', 'Thriller', 'Fiction'],
// //         author: [{name: 'Ivan Navi'}, {name: 'Dan White'}]
// //     }
// //
// // ]
// //
// // let twoAuthBook1 = [];
// //
// // for (const book1 of books1) {
// //     if (book1.author.length === 2) {
// //         twoAuthBook1.push(book1)
// //     }
// //
// // }
// //
// // console.log(twoAuthBook1);