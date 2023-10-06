
// destructuring

let array = ['js','html','css']

let [a,b,c] = array

console.log(a,b,c)

let course = {
    name: 'javascript',
    price: 1000,
    image: 'image-address'
}
let {name, ...newObject} = course
console.log(name, newObject)


// rest parameters

let array1 = ['js','html','css']

let [d,...rest] = array
console.log(rest)


const logger1 = (...params) =>{
    console.log(params)
}

logger1(1,2,3,4)


const logger2 = ({name, age, ...params}) =>{
    console.log(name)
    console.log(age)
    console.log(params)
}

logger2({
    name: 'anhuynh',
    age: 21,
    address: 'phong ngu'
})

let array5 = ['js','html','java']
let array2 = ['php','nodejs','laravel']

let array3 = [...array1,...array5]
console.log(array3)

let object1 = {
    name: 'Javascript'
}

let object2 = {
    price: 1000
}

let object3 = {
    ...object1,
    ...object2
}

console.log(object3)

let arrayRest = ['javascript','php','ruby']

const logger3 = (...rest) => {
    for (let i = 0; i < rest.length; i++){
        console.log(rest[i])
    }
}

logger3(...arrayRest)

// Tagged

function highlight([first, ...strings], ...values){
    console.log('first:', first)
    console.log('strings:', strings)
    console.log('values:', values)
}

let brand = 'F8'
let course5 = 'Javascript'

let html = highlight`Hoc lap trinh ${course5} tai ${brand} !`

console.log(html)

// Optional chaining

const objOpt = {
    name: 'animal',
    dog: {
        name: 'chita',
        // chita:{
        //     name: 'chita1'
        // }
    }
}

console.log(objOpt?.dog.chita?.name)

const obj = {
    // getName(value){
    //     console.log(value)
    // }
}

obj.getName?.(123)

