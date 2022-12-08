// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// let div = document.createElement('div');
// div.classList.add('wrap')
// document.body.appendChild(div);
//
// for (const simpson of simpsons) {
//     let divSimpson = document.createElement('div');
//     let h3NameSurname = document.createElement('h3');
//     let divAge = document.createElement('div');
//     let pInfo = document.createElement('p');
//     let imgPhoto = document.createElement('img');
//
//     divSimpson.classList.add('member');
//
//     h3NameSurname.innerText = `${simpson.name} ${simpson.surname}`;
//     divAge.innerText = `Age: ${simpson.age}`;
//     pInfo.innerText = simpson.info;
//     imgPhoto.src = simpson.photo;
//
//
//     divSimpson.append(h3NameSurname, divAge, pInfo, imgPhoto);
//     div.appendChild(divSimpson);
//
// }

//______________________________________________________________________________________________________________________
// Цикл в циклі
// - Є масив
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
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
// окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let divContainer = document.createElement('div');
// divContainer.classList.add('container');
// document.body.appendChild(divContainer);
//
// for (const course of coursesArray) {
//    let divWrapper = document.createElement('div')
//     let h3Title = document.createElement('h3');
//     let divDuration = document.createElement('div');
//     let divDurationMonth = document.createElement('div');
//     let divDurationHour = document.createElement('div');
//     let divModules = document.createElement('div');
//     let ulModule = document.createElement('ul');
//
//
//     h3Title.innerText = `Title - ${course.title}`;
//     divDurationMonth.innerText = `Month Duration - ${course.monthDuration}`;
//     divDurationHour.innerText = `Hour Duration - ${course.hourDuration} `;
//     ulModule.innerText = `Modules:`;
//
//     divWrapper.classList.add('divWrapper')
//     divDuration.classList.add('divDuration');
//
//
//     for (const module of course.modules) {
//         let liModule = document.createElement('li');
//         liModule.innerText = module;
//         ulModule.append(liModule)
//     }
//
//     divModules.append(ulModule);
//     divDuration.append(divDurationMonth, divDurationHour);
//     divWrapper.append(h3Title, divDuration, divModules);
//     divContainer.append(divWrapper)
//
//
// }


// _____________________________________________________________________________________________________________________
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let div = document.createElement('div');
//
// div.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// div.innerText = `Lorem ipsum dolor sit amet.`
//
// div.style.background = 'green';
// div.style.color = 'white';
// div.style.fontSize = '30px'
//
// let clone = div.cloneNode(true);
//
// document.body.append(div, clone);

//______________________________________________________________________________________________________________________
// - Є масив:
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// Взяти файл template1.html та додати в нього скріпт, котрий для кожного елементу масиву створює li та додає його
// до блоку .menu
// Завдання робити через цикли.

// let elementsByClassNameMenu = document.body.getElementsByClassName('menu')[0];
//
// for (const element of array) {
//
//     let liElement = document.createElement('li');
//     liElement.innerText = element;
//     liElement.style.marginLeft = '20px'
//     elementsByClassNameMenu.append(liElement);
//
// }

//______________________________________________________________________________________________________________________
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let divContainer = document.createElement('div');
// divContainer.classList.add('container');
// document.body.appendChild(divContainer);
//
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerText = `${element.title } - with ${element.monthDuration} months duration`
//
//
//     divContainer.appendChild(div);
//
// }
//

//______________________________________________________________________________________________________________________
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// let divContainer = document.createElement('div');
// divContainer.classList.add('container');
// document.body.appendChild(divContainer);
//
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     let h1 = document.createElement('h1');
//     let p = document.createElement('p');
//
//     h1.innerText = `${element.title}`;
//     p.innerText = `with ${element.monthDuration} months duration`
//
//     div.classList.add('item');
//     h1.classList.add('heading');
//     p.classList.add('description');
//
//
//     div.append(h1, p);
//     divContainer.append(div);
// }


//______________________________________________________________________________________________________________________
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
//     зникав елемент з id="text".

let div = document.createElement(div);
div.classList.add('text');

document.body.appendChild(div);

//______________________________________________________________________________________________________________________
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//______________________________________________________________________________________________________________________
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)