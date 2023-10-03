
let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250,
        isFinish: true
    },
    {
        id: 2,
        name: 'Java',
        coin: 0,
        isFinish: false
    },
    {
        id: 3,
        name: 'Php',
        coin: 500,
        isFinish: true
    },
    {
        id: 4,
        name: 'C#',
        coin: 0,
        isFinish: false
    },
    {
        id: 5,
        name: 'Python',
        coin: 400,
        isFinish: true
    }
    ,
    {
        id: 6,
        name: 'C++',
        coin: 250,
        isFinish: true
    }
]

// callback map()

Array.prototype.map2 = function (callback) {
    let output = []
    let arrayLength = this.length

    for (let i = 0; i < arrayLength; i++){
        let result = callback(this[i], i)
        output.push(result)
    }
    return output
}


let htmls = courses.map2((course, index) => {
    return `<h2>${course}</h2><br/>`
})
console.log(htmls.join(''))

// callback foEach()

Array.prototype.forEach2 = function (callback) {
    for (let index in this){
        if (this.hasOwnProperty(index)){
            callback(this[index], index, this)
        }
    }
}

courses.forEach2((course, index, array)=>{
    console.log(course, index, array)
})

// callback filter()

Array.prototype.filter2 = function (callback) {
    let output = []

    for (let index in this){
        if (this.hasOwnProperty(index)){
            let result = callback(this[index], index, this)
            if (result){
                output.push(this[index])
            }
        }
    }
    return output
}


const filterCourses = courses.filter2((course, index) =>{
    return course.coin > 250
})

console.log(filterCourses)

// callback some()

Array.prototype.some2 = function (callback) {

    for (let index in this){
        if (this.hasOwnProperty(index)){
            let result = callback(this[index], index, this)
            if (result){
                return  true
            }
        }
    }
    return false
}


const someCourses = courses.some2((course, index) =>{
    return course.isFinish
})

console.log(someCourses)

// callback every()

Array.prototype.every2 = function (callback) {
    let output = true
    for (let index in this){
        if (this.hasOwnProperty(index)){
            let result = callback(this[index], index, this)
            if (!result){
                output = false
                break;
            }
        }
    }
    return output
}


const everyCourses = courses.every2((course, index) =>{
    return course.isFinish
})

console.log(everyCourses)










