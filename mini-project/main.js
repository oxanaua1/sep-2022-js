let divContainer = document.createElement('div');

divContainer.classList.add('containerUsers')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        console.log(users);

        for (const user of users) {
            let divWrapper = document.createElement('div');
            let h3IdName = document.createElement('h3');
            let aLink = document.createElement('a');

            h3IdName.innerText = `${user.id}. ${user.name}`;
            aLink.innerText = `Details about user`;
            aLink.href = `detail-user.html?user=${user.id}`;

            divWrapper.classList.add('wrapper');
            h3IdName.classList.add('idName');
            aLink.classList.add('linkBtn');

            divWrapper.append(h3IdName, aLink);
            divContainer.appendChild(divWrapper)

        }

    });


document.body.appendChild(divContainer);
