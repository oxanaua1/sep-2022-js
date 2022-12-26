// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let array = ['a', 'b', 'c', 'd', 'e'];

// const input = document.createElement('input');
// const btn = document.createElement('button');
// input.placeholder = `enter the word to inspect it`
// btn.innerText = 'inspect the word';
// document.body.append(input, btn);

// btn.onclick = () => {
//     if (array.includes(input.value)) {
//         console.log(`bad word`);
//     } else {
//         console.log(`good word`);
//     }
// }
//______________________________________________________________________________________________________________________
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let array = ['to', 'be', 'ci', 'di', 'eo']; ????????????????????????????
//
//
// const input = document.createElement('input');
// const btn = document.createElement('button');
// input.placeholder = `enter the word to inspect it`
// btn.innerText = 'inspect the word';
// document.body.append(input, btn);
//
// btn.onclick = () => {
//
//     const str = JSON.stringify(input.value)
//     console.log(str);
//
//     const strArr = str.split(' ');
//     console.log(strArr);
//
//     array.forEach(value => {
//         strArr.forEach(valueStr => {
//             if (value === valueStr) {
//                 console.log('bad');
//             }else{
//                 console.log('none');
//             }
//
//         })
//
//     })
// }
//______________________________________________________________________________________________________________________
// - Создайте меню, которое раскрывается/сворачивается при клике
// function menu(array) {
//
//     const btn = document.createElement('button');
//     const menuDiv = document.createElement('div');
//
//     btn.innerText = 'menu';
//     btn.classList.add('btn');
//     menuDiv.classList.add('menuDiv');
//     menuDiv.classList.add('showMenu');
//     menuDiv.style.display = 'block';
//
//     array.map(value => {
//         const itemOfMenu = document.createElement('div');
//
//         itemOfMenu.classList.add('itemOfMenu');
//         itemOfMenu.innerText = value;
//
//         menuDiv.append(itemOfMenu);
//
//         btn.onclick = () => {
//             if (menuDiv.style.display === 'block') {
//                 menuDiv.style.display = 'none';
//                 menuDiv.classList.remove('showMenu');
//                 menuDiv.classList.toggle('hideMenu');
//
//             } else {
//                 menuDiv.style.display = 'block';
//                 menuDiv.classList.remove('hideMenu');
//                 menuDiv.classList.add('showMenu');
//
//             }
//
//         }
//
//     })
//
//     document.body.append(btn, menuDiv);
//
// }
//
// menu(['HTML', 'CSS', 'JS']);
//______________________________________________________________________________________________________________________
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// function hideCommentsBody() {
//     let div = document.createElement('div');
//
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//         .then(value => value.json())
//         .then(comments => {
//             console.log(comments);
//             comments.map(comment => {
//                 let divComment = document.createElement('div');
//                 let id = document.createElement('div');
//                 let title = document.createElement('div');
//                 let body = document.createElement('div');
//                 let button = document.createElement('button');
//
//                 body.classList.add('visible');
//                 body.style.background = 'lightblue';
//                 body.style.display = 'block';
//
//                 id.innerText = comment.id;
//                 title.innerText = comment.title;
//                 body.innerText = comment.body;
//                 button.innerText = 'hide body';
//
//                 divComment.append(id, title, body, button);
//
//                 div.append(divComment);
//
//
//                 button.onclick = () => {
//                     if (body.style.display === 'block') {
//                         body.style.display = 'none';
//                         body.classList.remove('visible');
//                         body.classList.toggle('hidden');
//
//                     } else {
//                         body.style.display = 'block';
//                         body.classList.remove('hidden');
//                         body.classList.add('visible');
//
//                     }
//
//                 }
//
//             })
//
//
//         });
//
//     document.body.append(div);
//
// }
//
// hideCommentsBody();


//______________________________________________________________________________________________________________________
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const btn = document.createElement('button');
// btn.innerText = 'hide me';
//
// btn.onclick = () => {
//     btn.style.display = 'none';
// }
//
// document.body.append(btn);
//______________________________________________________________________________________________________________________
// ???Доробити
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// function inspect(htmlElement) {
//     console.log(htmlElement.children);
//
//     htmlElement.onclick = (e) => {
//         let tagName = e.target;
//         let classListName = e.target.classList[0];
//         let idName = e.target.id;
//         let widthName = e.target.width;
//         let heightName = e.target.height;
//
//         console.log(tagName, 'tagName');
//         console.log(classListName, 'classListName');
//         console.log(idName, 'idName');
//         console.log(widthName, '- width', heightName, '- height');
//
//
//     }
// }
//
// inspect(document.body);
//

//______________________________________________________________________________________________________________________
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід,
//     розміри в форматі висота*ширина
//______________________________________________________________________________________________________________________
// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе  так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// function check() {
//     const hr1 = document.createElement('hr');
//     const hr2 = document.createElement('hr');
//     const hr3 = document.createElement('hr');
//
//     const status = document.getElementById('status');
//     const age = document.getElementById('age');
//     const city = document.getElementById('city');
//
//
//     status.onclick = () => {
//         if (status.checked) {
//             usersWithAddress.map(value => {
//                 if (value.status === false) {
//                     console.log(value);
//                     document.body.append(JSON.stringify(value))
//                 }
//
//             })
//         }
//         document.body.append(hr1);
//     }
//
//     age.onclick = () => {
//         if (age.checked) {
//             usersWithAddress.map(value => {
//                 if (value.age >= 29) {
//                     console.log(value);
//                     document.body.append(JSON.stringify(value))
//                 }
//
//             })
//         }
//         document.body.append(hr2);
//     }
//     city.onclick = () => {
//         if (city.checked) {
//             usersWithAddress.map(value => {
//                 if (value.address.city === 'Kyiv') {
//                     console.log(value);
//                     document.body.append(JSON.stringify(value))
//                 }
//
//             })
//         }
//         document.body.append(hr3);
//     }
//
//
// }

// check();
//______________________________________________________________________________________________________________________
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает
// в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему
// дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и
// выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним
//     на одном уровне
//______________________________________________________________________________________________________________________
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//______________________________________________________________________________________________________________________
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
