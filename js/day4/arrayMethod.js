
// Array methods:


let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Java',
        coin: 0
    },
    {
        id: 3,
        name: 'Php',
        coin: 500
    },
    {
        id: 4,
        name: 'C#',
        coin: 0
    },
    {
        id: 5,
        name: 'Python',
        coin: 400
    }
    ,
    {
        id: 6,
        name: 'C++',
        coin: 250
    }
]

// forEach() -> loc qua mang

console.log("ForEach:")
courses.forEach((course,index)=>{
    console.log(index,course)
})

// every() -> loc qua mang theo tuan tu tu tren xuong duoi
// neu dieu kien sai -> false nguoc lai la true

console.log("Every:")

const isFree1 = courses.every((course,index)=>{
    console.log(index)

    return course.coin === 0
})

console.log(isFree1)


// some() -> loc qua mang theo tuan tu tu tren xuong duoi
// neu dieu kien dung -> true nguoc lai la false

console.log("Some:")

const isFree2 = courses.some((course,index)=>{
    console.log(index)

    return course.coin === 0
})

console.log(isFree2)

// find() -> loc qua mang theo tuan tu tu tren xuong duoi
// tim kiem 1 phan tu theo dieu kien

console.log("find:")

const findCourse = courses.find((course,index)=>{

    return course.name === "Python"
})

console.log(findCourse)

// filter() -> loc qua mang theo tuan tu tu tren xuong duoi
// tim kiem nhieu phan tu theo dieu kien

console.log("filter:")

const filterCourse = courses.filter((course,index)=>{

    return course.coin === 250
})

console.log(filterCourse)

// map() -> loc qua mang theo tuan tu tu tren xuong duoi
// thay đoi phan tu theo dieu kien

console.log("map:")

const mapCourse = courses.map((course,index)=> {

    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: `Gia: ${course.coin}`
    }
})

console.log(mapCourse)

// reduce() -> loc qua mang theo tuan tu tu tren xuong duoi
// tinh toan theo dieu kien

console.log("reduce:")

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin
}

const totalCoin = courses.reduce(coinHandler,0)

console.log(totalCoin)

