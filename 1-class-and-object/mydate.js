
class MyDate{

    #day = 0
    #month = 0
    #year = 0

    constructor(day, month, year) {
        this.#day = day
        this.#month = month
        this.#year = year
    }

    printDay() {
        console.log("The date is: " + this.#day + "." + this.#month + "." + this.#year)
    }

    earlier(compared) {
        if (this.#year < compared.#year) {
            return true
        }
        if (this.#year === compared.#year && this.#month < compared.#month) {
            return true
        }
        if (this.#year === compared.#year && this.#month === compared.#month && this.#day < compared.#day) {
            return true
        }
        return false
    }

    validDate() {
        const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (this.#day < 1 || this.#day > months[this.#month] || this.#year < 0) {
            return false
        }
        if (!isInteger(this.#day) || !isInteger(this.#month) || !isInteger(this.#year)) {
            return false
        }
        return true
    }
}

module.exports = MyDate
