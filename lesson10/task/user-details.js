let url = new URL(location.href);
const id = url.searchParams.get('user');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);
        function explore(user) {

            for (const userKey in user) {

                if (typeof user[userKey] !== 'object') {

                    let divDetails = document.createElement('div');
                    divDetails.innerText = ` ${userKey}: ${user[userKey]}`;
                    document.body.append(divDetails);

                } else {
                    let divDetails = document.createElement('div');
                    divDetails.innerText = ` ${userKey}:`;
                    document.body.append(divDetails);

                    explore(user[userKey]);

                }
            }
        }

        explore(user);

    });