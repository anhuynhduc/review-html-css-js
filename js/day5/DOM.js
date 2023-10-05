
// HTML DOM

// 1.Element: ID, class, tag
// CSS selector, HTML collection

// 3. Text

const boxNode = document.querySelector('.box-1')

console.log(boxNode)

console.log(boxNode.getElementsByTagName('li'))

const pElement = document.getElementsByTagName('p')
console.log(pElement[1])

let headings = document.querySelectorAll('li')

for (let i = 0; i < headings.length; i++){
    console.log(headings[i])
}

// 2. Attribute

let h3Element = document.querySelector('a')

// cach 1
h3Element.className = "h3Element"

// cach 2
h3Element.setAttribute('href','#')

// lay gia tri attribute

console.log(h3Element.getAttribute('class'))

// innerText

console.log(h3Element.innerText)

// innerHTML, outerHTML

let boxElement = document.querySelector('.box-1')
boxElement.innerHTML = '<h1 title="Heading">New heading</h1>'

console.log(boxElement.innerHTML)

// DOM style
let box1Element = document.querySelector('.box-1')

box1Element.style.textAlign = "center"
Object.assign(box1Element.style,{
    width: "200px",
    height: "200px",
    background: "green"
})

// ClassList property

// contains -> kiem tra class co ton tai hay ko
box1Element.classList.add('red')

// add -> them class
box1Element.classList.add('red')

// remove -> xoa class
box1Element.classList.add('red')

// toggle -> vua them vao vua xoa class trong khoang thoi gian

setInterval(()=> {
    box1Element.classList.toggle('red')
},1000)

// DOM events

let liElement = document.querySelectorAll("li")

for (let i = 0; i < liElement.length; i++){
    liElement[i].onclick = (e) =>{
        console.log(liElement[i])
    }
}

// 