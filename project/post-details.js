//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let url = new URL(location.href);
console.log(url);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);

let div = document.createElement('div');
let divuser = document.createElement('div');
divuser.classList.add('divuser')
divuser.innerHTML = `<h2>User id - ${post.userId}</h2>
                     <p>Id - ${post.id}</p>
                     <p>Title - ${post.title}</p>
                     <p>Body - ${post.body}</p>`;

div.appendChild(divuser);

fetch(`https:jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(resp => resp.json())

    .then (comments=>{
    let divelement = document.createElement('div');
        divelement.classList.add('ulclass')
        divelement.innerHTML=`<p>Comments</p>`
    for (const comment of comments){
        let li = document.createElement('li');
        li.classList.add('li');


        li.innerText = comment.name;
        divelement.appendChild(li);
        div.appendChild(divelement);

    }
})




document.body.appendChild(div);