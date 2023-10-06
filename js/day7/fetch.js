
let postApi = 'https://jsonplaceholder.typicode.com/todos'

fetch(postApi)
    .then((response) =>{
        return response.json()
    })
    .then((posts) =>{
        let htmls = posts.map((post)=>{
            return `<li>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </li>`
        })
        let html = htmls.join('')
        document.getElementById('post-block').innerText = html
    })