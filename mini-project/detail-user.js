let url = new URL(location.href);
const id = url.searchParams.get('user');

let divWrapDetails = document.createElement('div');
let divWrapPosts = document.createElement('div');
let divUserDetails = document.createElement('div');
let divBtn = document.createElement('div');
let btnPostOfUser = document.createElement('button');

btnPostOfUser.innerText = 'post of current user';

divWrapDetails.classList.add('wrapDetails');
divWrapPosts.classList.add('wrapPosts');
divUserDetails.classList.add('userDetails');
divBtn.classList.add('wrapBtnPostOfUser');
btnPostOfUser.classList.add('btnPostOfUser');


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(value => value.json())
    .then(user => {
        console.log(user);

        function explore(user) {

            for (const userKey in user) {

                if (typeof user[userKey] !== 'object') {

                    let divDetails = document.createElement('div');
                    divDetails.innerText = ` ${userKey}: ${user[userKey]}`.toUpperCase();
                    divUserDetails.append(divDetails);

                } else {
                    let divDetails = document.createElement('div');
                    divDetails.innerText = ` ${userKey}:`;
                    divUserDetails.append(divDetails);

                    explore(user[userKey]);

                }
            }
        }

        explore(user);

    });


btnPostOfUser.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            console.log(posts);

            posts.map(post => {

                let postId = post.id;

                let divPostLinkWrap = document.createElement('div');
                let divPosts = document.createElement('div');
                let aLinkToPost = document.createElement('a');

                divPosts.innerText = `userId: ${post.userId}. Id: ${post.id}. Title: ${post.title}`;
                aLinkToPost.innerText = ' * Post Details * ';
                aLinkToPost.href = `post-details.html?post=` + JSON.stringify(post);


                divPosts.classList.add('post');
                aLinkToPost.classList.add('linkToPost');
                divPostLinkWrap.classList.add('postLinkWrap');

                divPostLinkWrap.append(divPosts, aLinkToPost);
                divWrapPosts.append(divPostLinkWrap);

            })

        });
};


divBtn.append(btnPostOfUser);
divWrapDetails.append(divUserDetails, divBtn, divWrapPosts);
document.body.append(divWrapDetails);
