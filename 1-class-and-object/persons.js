const Person = require("./person.js")
const bob = new Person("Bob")
const brian = new Person("Brian")
const alice = new Person("Alice")

const persons = [bob, brian, alice]

bob.printPerson()
brian.printPerson()
alice.printPerson()

while (bob.getAge() < 15) {
    bob.becomeOlder()
}

for (let i = 0; i < 20; i++) {
    brian.becomeOlder()
}

bob.setWeight(90)
bob.setHeight(1.90)

brian.setWeight(80)
brian.setHeight(1.80)

alice.setWeight(65)
alice.setHeight(1.64)

bob.printPerson()
brian.printPerson()
alice.printPerson()

persons.forEach(person => {
    if (person.isAdult()){
        console.log(person.getName() + " is an adult")
    } else {
        console.log(person.getName() + " is not an adult")
    }
}) 

persons.forEach(person => {
    if (person.getBMI() !== false) {
        console.log(person.getName() + " has a BMI of: ${person.getBMI()}")
    } else {
        console.log("BMI unavailable because height or weight is zero or not a number.")
    }
})
