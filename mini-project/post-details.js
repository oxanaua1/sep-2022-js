let url = new URL(location.href);
let post = url.searchParams.get('post');

let postOfUser = JSON.parse(post);
let id = postOfUser.id;

let divPostCommentsContainer = document.createElement('div');
let divPostContainer = document.createElement('div');
let divPost = document.createElement('div');
let btnComments = document.createElement('button');
let divCommentsContainer = document.createElement('div');

divPost.innerText = `userId: ${postOfUser.userId}.Id: ${postOfUser.id}.---Title: ${postOfUser.title}.body: ${postOfUser.body}`;
btnComments.innerText = 'show comments of the post';

divPostCommentsContainer.classList.add('postCommentsContainer');
divPostContainer.classList.add('postContainer');
divPost.classList.add('postDetails');
btnComments.classList.add('btnComments');
divCommentsContainer.classList.add('commentsContainer');


btnComments.onclick = () => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())
        .then(comments => {
            console.log(comments);

            comments.map(comment => {
                let divCommentsWrap = document.createElement('div');
                let h5Comment = document.createElement('h5');
                let divComment = document.createElement('div');

                h5Comment.innerText = `postId: ${comment.postId}. Id: ${comment.id}.Email: ${comment.email}`
                divComment.innerText = `Name: ${comment.name}`;

                divCommentsWrap.classList.add('commentsWrap')

                divCommentsWrap.append(h5Comment, divComment);
                divCommentsContainer.append(divCommentsWrap);
            })


        });
};


divPostContainer.append(divPost, btnComments);
divPostCommentsContainer.append(divPostContainer, divCommentsContainer);
document.body.append(divPostCommentsContainer);

