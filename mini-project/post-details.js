let url = new URL(location.href);
let post = url.searchParams.get('post');

let postOfUser = JSON.parse(post);
console.log(postOfUser);
let id = postOfUser.id;

let divPostContainer = document.createElement('div');
let divPost = document.createElement('div');
let btnComments = document.createElement('button');
let divCommentsWrap = document.createElement('div');

divPost.innerText = `userId: ${postOfUser.userId}.Id: ${postOfUser.id}.Title: ${postOfUser.title}.body: ${postOfUser.body}`;
btnComments.innerText = 'show comments of the post';

btnComments.onclick = () => {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())
        .then(comments => {
            console.log(comments);

            comments.map(comment => {
                let h3Comment = document.createElement('h3');
                let divComment = document.createElement('div');

                h3Comment.innerText = `postId: ${comment.postId}. Id: ${comment.id}.Email: ${comment.email}`
                divComment.innerText = `Name: ${comment.name}`

                divCommentsWrap.append(h3Comment, divComment);
            })


        });
}


divPostContainer.append(divPost, btnComments, divCommentsWrap);
document.body.append(divPostContainer);
