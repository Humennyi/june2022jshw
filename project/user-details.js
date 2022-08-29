// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
console.log(url);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);


let div = document.createElement('div');
div.classList.add('main');
let divresume = document.createElement('ul');
divresume.classList.add('position')

divresume.innerHTML =       `<h2>${user.id} ${user.name}</h2>
                             <p>Username - ${user.username}</p>
                             <p>Email - ${user.email}</p>
                             <ul ><h3>Address:</h3>
                                 <li>Street - ${user.address.street}</li>
                                 <li>Suite - ${user.address.suite}</li>
                                 <li>City - ${user.address.city}</li>
                                 <li>Zipcode- ${user.address.zipcode}</li>
                                 <li>Suite - ${user.address.suite}</li>
                                 <li>Geo:<ol><li>lat - ${user.address.geo.lat} </li>
                                             <li>lng - ${user.address.geo.lng}</li></ol></ul>                  
                             <p>Phone - ${user.phone}</p>
                             <p>Website - ${user.website}</p>
                             <ul ><h3>Company:</h3> 
                                 <li>Name - ${user.company.name}</li>
                                 <li>CatchPhrase - ${user.company.catchPhrase}</li>
                                 <li>Bs - ${user.company.bs},</li></ul>`;


div.appendChild(divresume);

let button = document.createElement('button');
button.innerText='Post of current user'
button.classList.add('btn')

div.appendChild(button);

button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(resp => resp.json())
        .then(posts => {
            let divpost = document.createElement('div');
            divpost.classList.add('divpost');

            for (const post of posts) {
                let text = document.createElement('div')
                text.innerText = post.title;
                text.classList.add('card')


                let la = document.createElement('a');
                la.href =`post-details.html?data=${JSON.stringify(post)}`;
                la.innerText = '  post-details';
                la.classList.add('btn2');

                text.appendChild(la);
                divpost.appendChild(text);
            }

            div.appendChild(divpost);
            button.disabled=true


        })
}


document.body.appendChild(div);
