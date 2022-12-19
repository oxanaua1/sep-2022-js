// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX ХХХ - айді користувача)


const divContainer = document.createElement('div');
document.body.append(divContainer);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        let ulWrap = document.createElement('ul');
        divContainer.appendChild(ulWrap);

        for (const user of users) {
            let liUser = document.createElement('li');
            let aLink = document.createElement('a');

            liUser.innerText = `${user.id} ${user.name} -->`;
            aLink.innerText = ` user-details`;
            aLink.href = `user-details.html?user=${user.id}`;

            liUser.append(aLink)
            ulWrap.append(liUser);
        }


    });
