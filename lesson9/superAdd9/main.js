// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
//
// function findAddress(array) {
//     let newArray = [];
//     array.find(value => {
//         newArray.push(value.address)
//     })
//     return newArray;
// }
// console.log(findAddress(users));
// --- інший варіант ---
//
// function findAddress(array) {
//     let newArray = [];
//     for (const item of array) {
//         if (item.address) {
//             newArray.push(item.address)
//         }
//     }
//
//     return newArray;
// }
//
// console.log(findAddress(users));

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

// function createUserDiv(array) {
//     for (const item of array) {
//
//         let div = document.createElement('div');
//         div.innerText = JSON.stringify(item);
//         document.body.append(div);
//     }
// }
//
// createUserDiv(users);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
//
// function createUserDivValue(array) {
//     let div = document.createElement('div');
//     for (const item of array) {
//         let divName = document.createElement('div');
//         let divAge = document.createElement('div');
//         let divStatus = document.createElement('div');
//         let divAddress = document.createElement('div');
//
//         divName.innerText = `Name: ` + item.name.slice(0, 1).toUpperCase().concat(item.name.slice(1, item.name.length));
//         divAge.innerText = `Age: ${item.age}`;
//         divStatus.innerText = `Status: ${item.status}`;
//         divAddress = `Address: ${item.address.city}, ${item.address.country}, ${item.address.street}, ${item.address.houseNumber}`;
//
//         div.append(divName, divAge, divStatus, divAddress)
//
//     }
//     document.body.append(div);
// }
//
// createUserDivValue(users);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// function createUserDivValueFull(array) {
//     let div = document.createElement('div');
//     div.style.background ='lightblue'
//
//     for (const item of array) {
//         let divName = document.createElement('div');
//         let divAge = document.createElement('div');
//         let divStatus = document.createElement('div');
//         let divAddress = document.createElement('div');
//         let divCity = document.createElement('div');
//         let divCountry = document.createElement('div');
//         let divStreet = document.createElement('div');
//         let divHouse = document.createElement('div');
//
//
//         divName.innerText = `Name: ` + item.name.slice(0, 1).toUpperCase().concat(item.name.slice(1, item.name.length));
//         divAge.innerText = `Age: ${item.age}`;
//         divStatus.innerText = `Status: ${item.status} `;
//         divAddress.innerText = `Address: `
//         divCountry = `country: ${item.address.country}, `;
//         divCity = `city: ${item.address.city}, `;
//         divStreet = `street: ${item.address.street}, `;
//         divHouse = `house number: ${item.address.houseNumber}`;
//
//         divAddress.style.background = 'lightyellow'
//
//         divAddress.append(divCountry, divCity, divStreet, divHouse)
//         div.append(divName, divAge, divStatus, divAddress)
//
//     }
//     document.body.append(div);
// }
//
// createUserDivValueFull(users);

//______________________________________________________________________________________________________________________
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
// яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде
// змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// function createContent(htmlElement) {
//
//     let content = document.getElementById('content');
//     let ul = document.createElement('ul');
//
//     content.append(ul)
//
//     let children = htmlElement.children
//
//     if (children.length !== 0) {
//         for (const child of children) {
//
//             let h2ByTagName = child.getElementsByTagName('h2');
//
//             for (const h2ByTagNameElement of h2ByTagName) {
//
//                 let li = document.createElement('li');
//                 li.innerText = h2ByTagNameElement.innerText;
//                 ul.append(li);
//
//                 createContent(h2ByTagNameElement)
//
//             }
//         }
//     }
//
// }
//
// createContent(document.body);


//______________________________________________________________________________________________________________________
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в
// окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];


// function createRules(array) {
//     let divWrap = document.createElement('div');
//     divWrap.classList.add('wrap');
//     document.body.append(divWrap);
//
//     for (let i = 0; i < array.length; i++) {
//         const item = array[i];
//         let div = document.createElement('div');
//         let h2 = document.createElement('h2');
//         let p = document.createElement('p');
//
//         h2.innerText = item.title;
//         p.innerText = item.body;
//
//         div.classList.add('rules');
//         div.classList.add(`rule${i + 1}`);
//
//         div.append(h2, p);
//         divWrap.append(div);
//
//     }
//
// }
//
// createRules(rules);