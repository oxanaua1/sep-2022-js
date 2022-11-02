// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['apple', 12, false, 'cactus', 'banana', 500, 0.3, true, 100500, -100];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let fictionBook = {
    title: 'Dark hole',
    pageCount: 300,
    genre: 'fiction'
}
let mysteryBook = {
    title: 'Another world',
    pageCount: 200,
    genre: 'mystery'
}
let westernsBook = {
    title: 'My horse',
    pageCount: 100,
    genre: 'westerns'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age
let romanceBook = {
    title: 'You are the only one',
    pageCount: 300,
    genre: 'Romance',
    authors: [{
        name: 'Ivan Navi',
        age: 30
    },
        {
            name: 'Dan White',
            age: 33
        }]
}
let fantasyBook = {
    title: 'Another world',
    pageCount: 200,
    genre: 'Fantasy',
    authors: [{
        name: 'Jack Black',
        age: 40
    },
        {
            name: 'Derek Brown',
            age: 44
        }]
}
let thrillerBook = {
    title: 'Good night',
    pageCount: 100,
    genre: 'Thriller',
    authors: [{
        name: 'Keven Klone',
        age: 50
    },
        {
            name: 'Itan Dreik',
            age: 55
        }]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. 
// Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Ivan',
        username: 'Black',
        password: 'black23'
    },
    {
        name: 'Derek',
        username: 'Brown',
        password: 'brown34'
    },
    {
        name: 'Steven',
        username: 'King',
        password: 'king55'
    },
    {
        name: 'Mykola',
        username: 'Chorniy',
        password: 'ch7777'
    },
    {
        name: 'Semen',
        username: 'Semenovych',
        password: 'lion66'
    },
    {
        name: 'Lev',
        username: 'Velykyi',
        password: 'big99'
    },
    {
        name: 'Andre',
        username: 'Peturson',
        password: 'drink89'
    },
    {
        name: 'Elon',
        username: 'Maska',
        password: 'face23'
    },
    {
        name: 'Kenni',
        username: 'Jackson',
        password: 'son45'
    },
    {
        name: 'Alan',
        username: 'Drinkalot',
        password: 'enough10'
    }
];
console.log(users[0].password);
console.log(users[1]['password']);
console.log(users[2].password);
console.log(users[3]['password']);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6].password);
console.log(users[7]['password']);
console.log(users[8].password);
console.log(users[9]['password']);