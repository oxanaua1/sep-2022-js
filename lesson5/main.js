// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangleSquare(a, b) {
//     return a * b;
// }
//
// let rectangleS = rectangleSquare(2, 3);
// let rectangleS1 = rectangleSquare(3, 4);
// console.log(rectangleS, rectangleS1);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleSquare(r) {
//     return 3.14 * r ** 2;
//
// }
//
// let circleS = circleSquare(2);
// console.log(circleS);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinderSquare(h, r) {
//     return 2 * 3.14 * r * (h + r);
// }
//
// let cylinderS = cylinderSquare(2, 3);
// console.log(cylinderS);


// - створити функцію яка приймає масив та виводить кожен його елемент

// let posts = [
//     {
//         userId: 1,
//         id: 1,
//         title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//         body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: 'qui est esse',
//         body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//         body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
//     },
//     {
//         userId: 1,
//         id: 4,
//         title: 'eum et est occaecati',
//         body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
//     },
//     {
//         userId: 1,
//         id: 5,
//         title: 'nesciunt quas odio',
//         body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
//     },
//     {
//         userId: 1,
//         id: 6,
//         title: 'dolorem eum magni eos aperiam quia',
//         body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
//     },
//     {
//         userId: 1,
//         id: 7,
//         title: 'magnam facilis autem',
//         body: 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas'
//     },
//     {
//         userId: 1,
//         id: 8,
//         title: 'dolorem dolore est ipsam',
//         body: 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae'
//     },
//     {
//         userId: 1,
//         id: 9,
//         title: 'nesciunt iure omnis dolorem tempora et accusantium',
//         body: 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
//     },
//     {
//         userId: 1,
//         id: 10,
//         title: 'optio molestias id quia eum',
//         body: 'quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error'
//     }
//
// ];
//
// function arrayPrint(arr) {
//     for (const item of arr) {
//         console.log(item);
//         for (const itemKey in item) {
//             document.write(`<div>${itemKey} -${item[itemKey]} </div>`);
//         }
//     }
// }
//
// arrayPrint(posts);

// - створити функцію, яка створює параграф з текстом. Текст задати через аргумент

// function createParagraph(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// createParagraph('Lorem ipsum dolor sit amet.');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createList(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// createList('list with li');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


// function createList(text, numberOfLi) {
//
//     document.write(`<ul>`)
//     for (let i = 0; i < numberOfLi; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
//
// createList('list with li', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function arr(...array) {
//
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ul>`);
//
//     console.log(array);
// }
//
// arr(1, 5, 'string', false, 'good', true);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
//
// function arr(...arrayObject) {
//
//     document.write(`<div>`)
//     for (const item of arrayObject) {
//
//         document.write(`<div>${item.id} - ${item.name}- ${item.age}</div> <hr/>`);
//     }
//
//     document.write(`</div>`);
//
//     console.log(arrayObject);
// }
//
// arr(
//     {id: 1, name: 'Oleg', age: 20},
//     {id: 2, name: 'Anna', age: 21},
//     {id: 3, name: 'Denis', age: 22}
// );


// - створити функцію яка повертає найменьше число з масиву

// function smallestNmb(...array) {
//     let number = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < number) {
//             number = array[i];
//         }
//     }
//     return number
// }
//
// let smallestNumber = smallestNmb(1, 4, 7, -3);
//
// console.log(smallestNumber);

// - створити функцію, яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// function sum(...array) {
//     let res = 0;
//     for (let i = 0; i < array.length; i++) {
//         res += array[i];
//
//     }
//     return res;
// }
//
// let numberSumator = sum(1, 2, 10);
//
// console.log(numberSumator);
