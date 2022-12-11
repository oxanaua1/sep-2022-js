// 1) Створити масив з 20 чисел та:
// let numbers = [5, 100, -3, 0, 88, 2, 500, -9, 2000, 10];
// console.log(numbers);

//     a) відсортувати його від меншого до більшого.
// let nmbAscending = numbers.sort((a, b) => a - b);
// console.log(nmbAscending);

//     b) відсортувати його від більшого до меншого.
// let nmbDescending = numbers.sort((a, b) => b - a);
// console.log(nmbDescending);

//     c) Відфілтрувати числа які є кратними 3.
// let numbers3 = numbers.filter(value => value % 3 === 0);
// console.log(numbers3);

//       d) Відфілтрувати числа які є більшими за 10.
// let nmbHigher10 = numbers.filter(value => value > 10);
// console.log(nmbHigher10);

//      e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numbers.forEach(value => {
//     document.write(`<div>${value}</div>`)
// })

//       f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let nmbIn3Times = numbers.map(value => value * 3);
// console.log(nmbIn3Times);

//       g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let numberSum = numbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue
//     });
// console.log(numberSum);


// 2) Створити масив з 20 стрічок та:
//
// let colours = ['Red', 'Orange', 'Yellow', 'Green', 'Cyan', 'Blue', 'Purple', 'White', 'Black', 'Grey', 'Silver', 'Pink',
//     'Maroon', 'Brown', 'Beige', 'Tan', 'Peach', 'Lime', 'Olive', 'Violet'];
// console.log(colours);

// a) Відсортувати його в алфавітному порядку
// let colourAscending = colours.sort();
// console.log(colourAscending);

// b) Відсортувати в зворотньому порядку

// let colourDescending = colours.sort((a, b) => {
//     if (b < a) {
//         return -1
//
//     }
// });
// console.log(colourDescending);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let newColours = [];
// colours.filter(value => {
//     if (value.length > 4) {
//         newColours.push(value)
//     }
// });
// console.log(newColours);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let coloursSamSays = colours.map(value => `Sam says: ${value}`)
// console.log(coloursSamSays);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// console.log(users);
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// const sortUsers = (users, direction) => {
//     if (direction === 'asc') {
//        return  users.sort((a, b) => a.age - b.age)
//     }
//     if (direction === 'desc') {
//         return users.sort((a, b) => b.age - a.age)
//     }
// }
// console.log(sortUsers(users, 'desc'));


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// const sortUsers = (users, direction) => {
//     if (direction === 'asc') {
//        return  users.sort((a, b) => a.name.length - b.name.length)
//     }
//     if (direction === 'desc') {
//         return users.sort((a, b) => b.name.length - a.name.length)
//     }
// }
// console.log(sortUsers(users, 'asc'));

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

// let newUsersStringify = JSON.stringify(users)
// let newUsers = JSON.parse(newUsersStringify);
//
// newUsers.forEach((value, index) => {
//     if (!value.id) {
//         value.id = index + 1
//     }
//     return newUsers
// });
//
// console.log(users);
// console.log(newUsers);


// d) відсортувати його за індентифікатором

// let sortedByIdNewUsers = newUsers.sort((a, b) => {
//     if (a.id > b.id) {
//         return -1
//     }
// });
//
// console.log(sortedByIdNewUsers);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
//
// let marriedUsersWithApt = newUsers.reduce((acc, value, index) => {
//     if (value.isMarried === true) {
//         value.apt = index + 1
//         acc.push(value)
//     }
//     return acc
// }, [])
//
// console.log(marriedUsersWithApt);
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {
//         producer: "subaru",
//         model: "wrx",
//         year: 2010,
//         color: "blue",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 400
//     },
//     {
//         producer: "subaru",
//         model: "legacy",
//         year: 2007,
//         color: "silver",
//         type: "sedan",
//         engine: "ez30",
//         volume: 3,
//         power: 250
//     },
//     {
//         producer: "subaru",
//         model: "tribeca",
//         year: 2011,
//         color: "white",
//         type: "jeep",
//         engine: "ej20",
//         volume: 2,
//         power: 300
//     },
//     {
//         producer: "subaru",
//         model: "leone",
//         year: 1998,
//         color: "yellow",
//         type: "sedan",
//         engine: "ez20x",
//         volume: 2,
//         power: 140
//     },
//     {
//         producer: "subaru",
//         model: "impreza",
//         year: 2014,
//         color: "red",
//         type: "sedan",
//         engine: "ej204x",
//         volume: 2,
//         power: 200
//     },
//     {
//         producer: "subaru",
//         model: "outback",
//         year: 2014,
//         color: "red",
//         type: "hachback",
//         engine: "ej204",
//         volume: 2,
//         power: 165
//     },
//     {
//         producer: "bmw",
//         model: "115",
//         year: 2013,
//         color: "red",
//         type: "hachback",
//         engine: "f15",
//         volume: 1.5,
//         power: 120
//     },
//     {
//         producer: "bmw",
//         model: "315",
//         year: 2010,
//         color: "white",
//         type: "sedan",
//         engine: "f15",
//         volume: 1.5, power: 120
//     },
//     {
//         producer: "bmw",
//         model: "650",
//         year: 2009,
//         color: "black",
//         type: "coupe",
//         engine: "f60",
//         volume: 6,
//         power: 350
//     },
//     {
//         producer: "bmw",
//         model: "320",
//         year: 2012,
//         color: "red",
//         type: "sedan",
//         engine: "f20",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e200",
//         year: 1990,
//         color: "silver",
//         type: "sedan",
//         engine: "eng200",
//         volume: 2,
//         power: 180
//     },
//     {
//         producer: "mercedes",
//         model: "e63",
//         year: 2017,
//         color: "yellow",
//         type: "sedan",
//         engine: "amg63",
//         volume: 3,
//         power: 400
//     },
//     {
//         producer: "mercedes",
//         model: "c250",
//         year: 2017,
//         color: "red",
//         type: "sedan",
//         engine: "eng25",
//         volume: 2.5,
//         power: 230
//     }
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let filteredCarsByVolume = cars.filter(value => value.volume > 3);
// console.log(filteredCarsByVolume);

// - двигун = 2л
// let filteredCarsByVolumeTwo= cars.filter(value => value.volume = 2);
// console.log(filteredCarsByVolumeTwo);

// - виробник мерс
// let filteredCarsByProducerMerc = cars.filter(value => value.producer = 'mercedes');
// console.log(filteredCarsByProducerMerc);

// - двигун більше 3х літрів + виробник мерседес
// let filteredCarsByProducerMercAndThreeVolume = cars.filter(value => value.producer = 'mercedes' && value.volume === 3);
// console.log(filteredCarsByProducerMercAndThreeVolume);

// - двигун більше 3х літрів + виробник субару
// let filteredCarsByProducerSubaruMoreThreeVolume = cars.filter(value => (value.producer = 'subaru') && (value.volume >= 3));
// console.log(filteredCarsByProducerSubaruMoreThreeVolume);

// - сили більше ніж 300
// let filteredCarsByPowerMore300 = cars.filter(value => value.power > 300);
// console.log(filteredCarsByPowerMore300);

// - сили більше ніж 300 + виробник субару
// let filteredCarsByPowerMore300AndSubaru = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(filteredCarsByPowerMore300AndSubaru);

// - мотор серіі ej
// let filteredCarsByModelEJ = cars.filter(value => value.model = 'ej');
// console.log(filteredCarsByModelEJ);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filteredCarsByModelEJProducerSubaruPowerMore300 = cars.filter(value => {
//     return (value.model = 'ej') && (value.producer === 'subaru') && (value.power >= 300);
// });
// console.log(filteredCarsByModelEJProducerSubaruPowerMore300);

// - двигун меньше 3х літрів + виробник мерседес
// let filteredCarsByProducerMercVolumeLess3 = cars.filter(value => {
//     return (value.producer === 'mercedes') && (value.volume <= 3);
// });
// console.log(filteredCarsByProducerMercVolumeLess3);

// - двигун більше 2л + сили більше 250
// let filteredCarsByVolumeMore3PowerMore250 = cars.filter(value => {
//     return (value.volume >= 3) && (value.power >= 250);
// });
// console.log(filteredCarsByVolumeMore3PowerMore250);

// - сили більше 250  + виробник бмв
// let filteredCarsByPowerMore250ProducerBMW = cars.filter(value => {
//     return (value.power >= 250) && (value.producer === 'bmw');
// });
// console.log(filteredCarsByPowerMore250ProducerBMW);

// - взять наступний массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// console.log(usersWithAddress);

// -- Відсортувати їх по ID
// let sortedById = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sortedById);

// -- Відсортувати їх по ID в зворотньому порядку
// let sortedByIdReverse = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sortedByIdReverse);

// -- Відсортувати по віку
// let sortedByAge = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sortedByAge);

// -- Відсортувати по віку в зворотньому порядку
// let sortedByAgeReverse = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sortedByAgeReverse);

// -- Відсорутвати по імені
// let sortedByName = usersWithAddress.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1
//     }
//     return usersWithAddress
// });
// console.log(sortedByName);

// -- Відсорутвати по назві вулиці
// let sortedByStreet = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1
//     }
//     return usersWithAddress
// });
// console.log(sortedByStreet);

// -- Відсорутвати по номеру будинку
// let sortedByBldNmb = usersWithAddress.sort((a, b) => {
//     if (a.address.number < b.address.number) {
//         return -1
//     }
//     return usersWithAddress
// });
// console.log(sortedByBldNmb);

// -- Залишити тільки тих, хто молодший ніж 30 (filter)
// let filteredAgeLess30 = usersWithAddress.filter(value => value.age < 30);
// console.log(filteredAgeLess30);

// -- Залишити тільки одружених
// let filteredIsMarried = usersWithAddress.filter(value => value.isMarried);
// console.log(filteredIsMarried);

// -- Залишити тільки одружених, які молодні за 30
// let filteredIsMarriedYounger30 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
// console.log(filteredIsMarriedYounger30);

// -- Залишити лише тих, в кого парні номери будинків.
// let filteredUsersWithEvenNumb = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(filteredUsersWithEvenNumb);

// -- Порахувати загальний вік всіх людей. (reduce)
// let filteredUsersSumAge = usersWithAddress.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.age
// }, 0)
// console.log(filteredUsersSumAge);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

// let filteredUsers = usersWithAddress.reduce((acc, value, index) => {
//     if (value.age > 30) {
//         value.child = index + 1;
//         acc.push(value)
//     }
//     return acc;
// }, [])
// console.log(filteredUsers);


// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями: ???????????????????????????????????????????????????
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
//     На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
//     Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//______________________________________________________________________________________________________________
// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
//     Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента.
//     Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// // 1. Key = 1
// // Answer: MinIndex = 0, MaxIndex = 0.
// // 2. Key = 4
// // Answer: MinIndex = 3, MaxIndex = 6.
//
//
// const minMax = (arr, key) => {
//     let min = 0;
//     let max = 0;
//     let res = -1;
//     let newArr = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (key === arr[i]) {
//             newArr.push(i)
//         }
//     }
//     console.log(newArr);
//
//     min = newArr[0];
//     max = newArr[newArr.length - 1];
//
//     if (min === undefined && max === undefined) {
//         max = min = res;
//     }
//     console.log(min, max);
// }
//
// minMax(arr, 15);
