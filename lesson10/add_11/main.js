// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до
// масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


const container = document.createElement('div');
const linkToFavoritePage = document.createElement('a');
linkToFavoritePage.innerText = `Go to Favorite Page`;
linkToFavoritePage.href = `./favorites.html`

let favoriteKey = 'favorite';
localStorage.setItem(favoriteKey, JSON.stringify([]));

for (const user of users) {

    const wrapper = document.createElement('div');
    const userItem = document.createElement('div');
    const btnAddToFavorite = document.createElement('button');

    userItem.innerText = `${user.name} - ${user.age} - ${user.status}`;
    btnAddToFavorite.innerText = `Add to favorite`;


    btnAddToFavorite.onclick = () => {
        let favoritesArr = JSON.parse(localStorage.getItem(favoriteKey)) || [];
        favoritesArr.push(user);
        localStorage.setItem(favoriteKey, JSON.stringify(favoritesArr));
        console.log(favoritesArr);

        btnAddToFavorite.disabled = true;

    }


    wrapper.append(userItem, btnAddToFavorite);
    container.append(wrapper);

}

container.append(linkToFavoritePage);
document.body.append(container);


