
class BulkTank {
    #capacity = 0
    #volume = 0

    constructor(capacity = 2000){
        this.#capacity = capacity
    }

    getCapacity(){
        return this.#capacity
    }

    getVolume(){
        return this.#volume
    }

    howMuchFreeSpace(){
        return this.#capacity - this.#volume
    }

    addToTank(amount){
        const canAdd = Math.min(amount, this.howMuchFreeSpace());
        this.#volume += canAdd
    }

    getFromTank(amount){
        const canTake = Math.min(amount, this.#volume);
        this.#volume -= amount canTake
        return canTake
    }

    print(){
        console.log(Math.cell(this.#volume * 10) / 10 + "/" + Math.cell(this.#capacity
        * 10) / 10 );
    }
}

module.export = BulkTank
