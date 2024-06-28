let body = document.querySelector("body");

async function get20Posts(api) {
    let data = await fetch(api);
    let posts = await data.json();

    for (let i = 0; i < 20; i++) {
        let post = posts[i];

        let box = document.createElement("div");
        let name = document.createElement("h2");
        let email = document.createElement("p");
        let content = document.createElement("p");

        name.textContent = post.name;
        email.textContent = post.email;
        content.textContent = post.body;

        box.classList.add("box");
        box.classList.add("container");
        email.classList.add("email");

        box.appendChild(name);
        box.appendChild(email);
        box.appendChild(content);

        body.appendChild(box);
    }
}

get20Posts("https://jsonplaceholder.typecode.com/comments");