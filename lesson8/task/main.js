// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let Users = [];
// for (let i = 0; i < 10; i++) {
//
//     let usersCreated = new User(i + 1,
//         `Anna${i + 1}`,
//         `Brown${i + 1}`,
//         `anna@gmail${i + 1}.com`,
//         `245-64-${i + 10}`);
//
//     Users.push(usersCreated)
// }
// console.log(Users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredUsers = Users.filter(value => value.id % 2 === 0);
// console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortedUsersAsc = sortedUsersDesc.sort((a, b) => a.id - b.id);
// console.log(sortedUsersAsc);

// let sortedUsersDesc = Users.sort((a, b) => b.id - a.id);
// console.log(sortedUsersDesc);


//_______________________________________________________________________________________________________________________
// - створити класс для об'єктів Client з полями id, name, surname, email, phone, order 
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let Client1 = new Client(1, 'Ivan', 'Ivanov', 'ivanov@gmail.com', '0322456455', ['banana', 'apple', 'tomato']);
// let Client2 = new Client(2, 'Petro', 'Petrenko', 'petrenko@gmail.com', '0322456466', ['orange', 'apple', 'tomato', 'potato']);
// let Client3 = new Client(3, 'John', 'Johnson', 'johnon@gmail.com', '0322456477', ['milk', 'chocolate']);
// let Client4 = new Client(4, 'Mike', 'Black', 'black@gmail.com', '0322456488', ['chocolate', 'milk', 'banana', 'orange', 'tomato']);
// let Client5 = new Client(5, 'Derek', 'Rian', 'rian@gmail.com', '0322456499', ['banana', 'apple', 'tomato', 'potato']);
// let Client6 = new Client(6, 'Kevin', 'Kos', 'kos@gmail.com', '0322456400', ['vodka', 'banana', 'apple', 'tomato', 'juice']);
// let Client7 = new Client(7, 'Kolian', 'Kwin', 'kwin@gmail.com', '0322456412', ['tekila', 'tomato', 'banana', 'apple', 'milk', 'chocolate']);
// let Client8 = new Client(8, 'Harry', 'Potter', 'potter@gmail.com', '0322456433', ['banana', 'apple', 'tomato']);
// let Client9 = new Client(9, 'Anna', 'White', 'white@gmail.com', '0322456422', ['apple', 'banana', 'tomato', 'milk']);
// let Client10 = new Client(10, 'Emma', 'Stone', 'stone@gmail.com', '0322456444', ['apple', 'tomato']);
//
// let Clients = [];
// Clients.push(Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10);
// console.log(Clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів
// в полі order по зростанню. (sort)
// let sortedClientsByOrderAsc = Clients.sort((a, b) => a.order.length - b.order.length);
// console.log(sortedClientsByOrderAsc);

//______________________________________________________________________________________________________________________
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, speed, volume) {
//     this.mode = model;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed} км. на годину`);
//     };
//     this.info = function () {
//         return {
//             producer: this.producer,
//             year: this.year,
//             speed: this.speed,
//             volume: this.volume
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.speed * newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         return this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         return this.driver = driver
//
//
//     }
//
// }

// let Car1 = new Car('BMW-3', 'BMW', 2020, 200, 5);
// Car1.drive();
// console.log(Car1.info());
// console.log(Car1.increaseMaxSpeed(2));
// console.log(Car1.changeYear(2022));
// console.log(Car1.addDriver('sdsa'));
// console.log(Car1.addDriver({name: 'Oleg', age: 40}));
// console.log(Car1);

//______________________________________________________________________________________________________________________
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//
//
//     constructor(model, producer, year, speed, volume) {
//
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.volume = volume;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.speed} км. на годину`);
//     };
//
//     info() {
//         return {
//             producer: this.producer,
//             year: this.year,
//             speed: this.speed,
//             volume: this.volume
//         }
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         return this.speed * newSpeed;
//     };
//
//     changeYear(newValue) {
//         return this.year = newValue;
//     };
//
//     addDriver(driver) {
//         return this.driver = driver
//
//     };
// }

// let Car1 = new Car('BMW-3', 'BMW', 2020, 200, 5);
// Car1.drive();
// console.log(Car1.info());
// console.log(Car1.increaseMaxSpeed(2));
// console.log(Car1.changeYear(2022));
// console.log(Car1.addDriver({name: 'Oleg', age: 40}));
// console.log(Car1);


//______________________________________________________________________________________________________________________
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


