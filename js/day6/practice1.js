// 1. Input / select
// 2. Key up / down

// input
let inputElement = document.querySelector('input[type="text"]')

inputElement.oninput = (e)=>{
    console.log(e.target.value)
}

// checkbox

let checkBoxElement = document.querySelector('input[type="checkbox"]')

checkBoxElement.oninput = (e)=>{
    console.log(e.target.checked)
}

// select

let selectBoxElement = document.querySelector('select')

selectBoxElement.onchange = (e)=>{
    console.log(e.target.value)
}

// PreventDefault -> ngan can hanh vi mac dinh
// links

let aElement = document.links

for(let i = 0; i < aElement.length; i++){
    aElement[i].onclick = (e) =>{
        if (!e.target.href.startsWith("https://f8.edu.vn")){
            e.preventDefault()
        }
    }
}

// focus input
let ulElement = document.querySelector('ul')

ulElement.onmousedown = (e) =>{
    e.preventDefault()
}

ulElement.onclick = (e) => {
    console.log(e.target)
}

//stopPropagation -> ngan can su kien noi bot

document.querySelector('.stopPropagation').onclick = ()=>{
    console.log('DIV')
}

document.querySelector('button').onclick = (e)=>{
    e.stopPropagation()
    console.log('Click me !')
}

// addEventListener, removeEventListener -> lang nge
// hoac loai bo su kien

let btn = document.getElementById('add_remove_listener')

function work() {
    console.log('let go work')
}

btn.addEventListener('click', work)
setTimeout(()=>{
    btn.removeEventListener('click', work)
},3000)
