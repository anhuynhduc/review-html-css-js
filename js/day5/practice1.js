
// Flat - " lam phang " mang tu Depth array - " Mang sau"

let deptArray = [1, 2, [3,4], 5, 6, [7,8,9]]

const flatArray = deptArray.reduce((flatOutput, deptItem) =>{
    return flatOutput.concat(deptItem)
},[])
console.log(flatArray)

// Lay ra cac khoa hoc dua vao 1 mang moi

let topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "Html, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "Php"
            },
            {
                id: 2,
                title: "Laravel"
            }
        ]
    }
]

const newCourses = topics.reduce((courses, topic) => {
    return courses.concat(topic.courses)
},[])

console.log(newCourses)

const htmls = newCourses.map((course)=>{
    return `
        <div>
            <h2>${course.title}</h2>
            <h2>ID: ${course.id}</h2>    
        </div>
    `
})

console.log(htmls.join(''))

// includes method

let title = 'Responsive web design'

console.log(title.includes('Responsive', 0))

let courses = ['html','js','python']

console.log(courses.includes('js', 2))
