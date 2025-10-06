
const BulkTank = require("./bulktank")
const Cow = require("./cow")

const tank = new BulkTank();
tank.getFromTank(100);
tank.addToTank(25);
tank.getFromTank(5);
tank.print();

const tank2 = new BulkTank(50);
tank2.addToTank(100);
tank2.print();

const cow1 = new Cow();
console.log(cow1.print())

cow1.liveHour();
cow1.liveHour();
cow1.liveHour();
cow1.liveHour();
console.log(cow1.print())
