
console.log("Object:")
const key = "jsandjklasndasl"

const emailKey = 'email'
const myInfo = {
    name: "An Huynh",
    age: 21,
    address: "Quang Nam",
    [emailKey]: key,
    getName: function () {
        return this.name
    }
}

console.log(myInfo.getName())

// Object constructor

function Profile(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;

    this.getName_Age = function () {
        return `${this.name} - ${this.age}`
    }
}

const an = new Profile('Huynh Duc An', '21', 'Quang Nam')
const linh = new Profile('Vo Hoai Linh', '22', 'Hue')

console.log(an)
console.log(linh)
console.log(an.getName_Age())

