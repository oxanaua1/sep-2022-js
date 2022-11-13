////1. Створити пустий масив та :
//// a. заповнити його 50 парними числами за допомоги циклу.
// let arr = [];
// for (let i = 0, j = 0; i < 100; i++) {
//
//     if (i % 2 === 0) {
//
//         arr[j] = i;
//         j++;
//     }
// }
// console.log(arr);

//// b. заповнити його 50 непарними числами за допомоги циклу.
// let arr = [];
// for (let i = 0, j = 0; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//
//         arr[j] = i;
//         j++;
//     }
// }
// console.log(arr);


//// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * 20);
//
// }
// console.log(arr);

//// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr = [];
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.floor(Math.random() * (732 - 8) + 8);
//
// }
// console.log(arr);

//// 2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < arr.length; i++) {
//     if (i % 3 === 0) {
//         console.log(arr[i]);
//     }
//
// }


//// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

//
// let arr = [16, 3, 4, 56, 67, 6, 87, 96, 7, 8, 54, 53, 47, 79];
//
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if ((i % 3 === 0) && (arr[i] % 2 === 0)) {
//
//         console.log(arr[i]);
//     }
//
// }

// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i] % 2 === 0) {
//
//         console.log(arr[i]);
//     }
// }

//// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх
// в новий масив

// let arr = [16, 3, 4, 56, 67, 6, 87, 96, 7, 8, 54, 53, 47, 79];
//
// console.log(arr);
// let newArr = [];
//
// for (let i = 0, j = 0; i < arr.length; i++) {
//     if ((i % 3 === 0) && (arr[i] % 2 === 0)) {
//         console.log(arr[i]);
//        
//         newArr[j] = arr[i];
//         j++;
//     }
//
// }
// console.log(newArr);

////5. Вивести кожен елемент масиву, сусід справа якого є парним
//// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let numArr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i + 1] % 2 === 0) {
//         console.log(numArr[i]);
//     }
//
// }


//// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. 
// Обрахувати середній чек.

// let amnt = [100, 250, 50, 168, 120, 345, 188];
//
// let average = 0;
// for (let i = 0; i < amnt.length; i++) {
//     average += amnt[i]
// }
// let res = average / amnt.length
// console.log(res);

//// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arrRandom = [];
// let newArrRandom = [];
//
//
// for (let i = 0, j = 0; i < 20; i++) {
//     arrRandom[i] = Math.floor(Math.random() * 20);
//     newArrRandom[j] = arrRandom[i] * 5;
//     j++;
// }
// console.log(arrRandom);
// console.log(newArrRandom);

//// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - 
// додати його в інший масив.

// let array = [10, -20, 'Apple', 'Banana', 100, 'Grape', 0.5, true, 11, false];
// let newArr = [];
//
// for (let i = 0, j = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//
//         console.log(array[i]);
//        
//         newArr[j] = array[i];
//
//         j++;
//     }
// }
// console.log(newArr);


//// - Дано 2 масиви з рівною кількістю об'єктів.
//// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
////    Записати цей об'єкт в новий масив
//// Example:
////    let usersWithCities = [
////             {
////                 id: 1, // <===
////                 name: 'vasya',
////                 age: 31,
////                 status: false,
////                 address: {
////                    user_id: 1, // <===
////                     country: 'Ukraine',
////                     city: 'Ternopil'
////                 }
////             },
////             // TO BE CONTINUED .....
//         ]
//// Масиви:
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities = [];
// let address;
// for (const usersWithIdElement of usersWithId) {
//     for (const citiesWithIdElement of citiesWithId) {
//         if (usersWithIdElement.id === citiesWithIdElement.user_id) {
//             document.write(`
//           <div>
//                 id: ${usersWithIdElement.id}
//                 name:${usersWithIdElement.name}
//                 age: ${usersWithIdElement.age}
//                 status: ${usersWithIdElement.status}
//                 <br> address: user_id: ${citiesWithIdElement.user_id}
//                               country: ${citiesWithIdElement.country}
//                               city: ${citiesWithIdElement.city}
//                 <hr>
//
//
//           </div>
//         `);
//         }
//     }
//
//
// }
// console.log(usersWithId);


//// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let numbers = [10, -20, 100, 0.5, 55, 300, 400, 7, 8, 33];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//     }
//
// }


//// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. 
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let newNumbers = [];
// let numbers = [10, -20, 100, 0.5, 10500, 300, 400, 4, 8, 33];
// for (let i = 0; i < numbers.length; i++) {
//     newNumbers[i] = numbers[i];
// }
// console.log(newNumbers);


//// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let abc = ['a', 'b', 'c'];
// let newAbc = '';
//
// for (let i = 0; i < abc.length; i++) {
//     newAbc += abc[i];
// }
// console.log(newAbc);

//// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let abc = ['a', 'b', 'c'];
// let newAbc = '';
// let i = 0;
// while (i < abc.length) {
//
//     newAbc += abc[i]
//     i++;
// }
// console.log(newAbc);

//// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let abc = ['a', 'b', 'c'];
// let newAbc = '';
// for (const string of abc) {
//     newAbc += string
// }
//
// console.log(newAbc);