const containerFav = document.createElement('div');
const linkToHomePage = document.createElement('a');

linkToHomePage.innerText = `Go to Home Page`;
linkToHomePage.href = `./index.html`;

let users = JSON.parse(localStorage.getItem('favorite')) || [];
console.log(users);

for (const user of users) {

    const wrapper = document.createElement('div');
    const userDiv = document.createElement('div');

    userDiv.innerText = `${user.name} - ${user.age} - ${user.status}`;

    wrapper.append(userDiv);
    containerFav.append(wrapper);


}


containerFav.append(linkToHomePage);
document.body.append(containerFav);