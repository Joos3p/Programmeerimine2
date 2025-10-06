class Person{
  
    #name = ""
    #age = 0
    #weight = 0
    #height = 0

    constructor(name) {
        this.#name = name
    }

    printPerson() {
        console.log(this.#name + ", age " + this.#age + " years")
    }

    becomeOlder() {
        this.#age++
    }

    isAdult() {
        if (this.#age < 18) {
            return false
        }
        return true
    }

    setHeight(height){
        this.#height = height
    }

    getHeight(height){
        return this.#height
    }

    setWeight(weight){
        this.#weight = weight
    }

    getWeight(weight){
        return this.#weight
    }

    getBMI() {
        if (this.#height <= 0 || this.#weight <= 0 || isNaN(this.#height) || isNaN(this.#weight)) {
            return false;
        }
        const bmi = (this.#weight / this.#height ** 2)
        return Number(bmi.toFixed(2));
    }

    setName(name){
        this.#name = name
    }

    getName(name){
        return this.#name
    }

    setAge(age){
        this.#age = age
    }

    getAge(age){
        return this.#age
    }
}

module.exports = Person
