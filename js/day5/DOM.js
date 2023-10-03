
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