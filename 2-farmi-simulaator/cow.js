const NAMES = [ 
    "Anu", "Arpa", "Essi", "Heluna", "Hely",
    "Hento", "Hilke", "Hilsu", "Hymy", "Ihq", "Ilme", "Ilo",
    "Jaana", "Jami", "Jatta", "Laku", "Liekki",
    "Mainikki", "Mella", "Mimmi", "Naatti",
    "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
    "Rima", "Soma", "Sylkki", "Valpu", "Virpi"
];

class Cow {

    constructor(name) {
        this.name = name || NAMES[Math.floor(Math.random() * NAMES.length)]
        this.capacity = Math.floor(Math.random() * (40 - 15 + 1)) + 15;
        this.amount = 0
    }

    getCapacity() {
        return this.capacity
    }

    getName() {
        return this.name 
    }

    getAmount() {
        return this.amount
    }

    liveHour() {
        const growth = 0.7 + Math.random() * (2.0 - 0.7);
        this.amount = Math.min(this.capacity, growth + this.amount);
    }

    milk() {
        const milked = this.amount;
        this.amount = 0;
        return milked;
    }

    print() {
        return `${this.name} ${(Math.round(this.amount * 10) / 10).toFixed(1)}/${this.capacity.toFixed(1)}`;
    }
}

module.exports = Cow
