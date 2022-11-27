// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString = (str, n) => {
//
//     let strNew = [];
//     let i = 0;
//     while (i < str.length) {
//         strNew.push(str.slice(0, n))
//         str = str.slice(n)
//     }
//     i += n;
//
//     return strNew
// }
// console.log(cutString('наслаждение', 3));
// document.writeln(cutString('наслаждение', 3))


//// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної
//// кількості символів.
// let str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => {
//     return str.substring(0, length)
// }
// console.log(delete_characters(str, 7));
// document.writeln(delete_characters(str, 7)); // Каждый


//// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
////При цьому всі символи рядка необхідно перевести у верхній регістр.
// let str = "HTML JavaScript PHP";
// const insert_dash = (str) => {
//     return str.toUpperCase().replaceAll(' ', '-')
// }
// console.log(insert_dash(str));
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


//// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
//// з нижнього регістру у верхній.
// let str = 'peace'
// const strFirstLetterToUpperCase = (str) => {
//
//     return str.slice(0, 1)
//         .toUpperCase()
//         .concat(str.slice(1, str.length))
// }
// console.log(strFirstLetterToUpperCase(str));


//// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// const normalizeName = (str) => {
//     return str.replace(('..'), ' ')
//         .replace('---', ' ')
//         .replace('__', ' ')
// }
// console.log(normalizeName(n1));
// console.log(normalizeName(n2));
// console.log(normalizeName(n3));


////- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const randomNumbers = ( length, numbers) => {
//     let array=[];
//     for (let i = 0; i < length-1; i++) {
//         array[i] = Math.round(Math.random() * numbers)
//         array.push(array[i])
//     }
//     return array
// }
// console.log(randomNumbers(10, 100));


//// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//// Відсортувати його за допомоги sort
// const randomNumbers = (length, numbers,) => {
//     let array = [];
//     for (let i = 0; i < length - 1; i++) {
//         array[i] = Math.round(Math.random() * numbers)
//         array.push(array[i]);
//     }
//     return array;
// }
//
// let newArray = randomNumbers(10, 100);
// console.log(newArray);
//
// let sortAscending = newArray.sort((a, b) => a - b);
// console.log(sortAscending);
// let sortDescending = newArray.sort((a, b) => b - a);
// console.log(sortDescending);


//// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// const randomNumbers = (length, numbers,) => {
//     let array = [];
//     for (let i = 0; i < length - 1; i++) {
//         array[i] = Math.round(Math.random() * numbers)
//         array.push(array[i]);
//     }
//     return array;
// }
//
// let newArray = randomNumbers(10, 100);
// console.log(newArray);
//
// let filteredNewArray = newArray.filter(value => value % 2 === 0);
// console.log(filteredNewArray);


//// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'lorem ipsum dolor sit amet'
//
// const capitalize = (str) => {
//     return str.split(' ')
//         .map(value => value
//             .toUpperCase()
//             .slice(0, 1)
//             .concat(value.slice(1, value.length)))
//         .toString()
//         .replaceAll(',', ' ')
//
// }
// console.log(capitalize(str));



// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


//// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let sortCoursesArray = coursesArray.sort((a, b) => {
//     if (a.modules.length > b.modules.length) {
//         return b.modules.length - a.modules.length
//     }
// });
//
// console.log(sortCoursesArray);


//// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
////let symb = "о", str = "Астрономия это наука о небесных объектах";
/// document.writeln(count(str, symb)) // 5

// let str = "Астрономия это наука о небесных объектах";
// const count = (str, symb) => {
//
//     if (str === undefined || symb === undefined) {
//         return 0
//     }
//     str = str.toString();
//     symb = symb.toString();
//
//     let count = 0;
//     let p = str.indexOf(symb)
//     while (p >= 1) {
//         count++;
//         p = str.indexOf(symb, p + 1);
//
//     }
//     return count;
// }
// console.log(count(str, 'о'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5))// 'Сила тяжести приложена к центру'
//
// const cutString = (str, n) => {
//
//     return str.split(' ').splice(0, n).toString().replaceAll(',', ' ')
//
// }
//
// console.log(cutString(str, 5));


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
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

//// -знайти наібльшу книжку.
// function max(books) {
//     let max = books[0];
//     books.forEach(function (book) {
//         if (book.page > max.page) {
//             max = book;
//         }
//     });
//     return max;
// }
// console.log(max(books));


// - знайти книжку/ки з найбільшою кількістю жанрів

// const maxGenreBook = (books) => {
//     let max = books[0];
//     books.forEach(function (book) {
//         if (book.genre.length > max.genre.length) {
//             max = book;
//         }
//     })
//     return max
//
// }
// console.log(maxGenreBook(books));


// - знайти книжку/ки з найдовшою назвою

// const maxNameBook = (books) => {
//     let max = books[0];
//     books.forEach((book) => {
//         if (book.name.length > max.name.length) {
//             max = book;
//         }
//     })
//     return max
//
// }
// console.log(maxNameBook(books));
// - знайти книжку/ки які писали 2 автори

//
// const twoAuthorsBook = (books) => {
//     let twoAuthBook = books[0];
//     books.forEach((book) => {
//         if (book.author.length === 2) {
//             twoAuthBook = book
//         }
//     })
//     return twoAuthBook;
//
// }
// console.log(twoAuthorsBook(books));
// - знайти книжку/ки які писав 1 автор

//
// const oneAuthorsBook = (books) => {
//     let twoAuthBook = books[0];
//     books.forEach((book) => {
//         if (book.author.length === 1) {
//             twoAuthBook = book
//         }
//     })
//     return twoAuthBook;
//
// }
// console.log(oneAuthorsBook(books));


// - вісортувати книжки по кількості сторінок по зростанню
// const sortBooks = (books) => {
//     books.sort((a, b) => a.page - b.page);
//     return books;
// }
// console.log(sortBooks(books));
