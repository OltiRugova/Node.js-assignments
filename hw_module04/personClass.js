const events = require('events');

class Person extends events{
    constructor(name){
        super();
        this.name = name;
    }

    speaks(msg){
        console.log(`${this.name} says: ${msg}`);
    }
}

const bill = new Person('Bill');
const tom = new Person('Tom');

bill.on('says', bill.speaks.bind(bill));
tom.on('says', tom.speaks.bind(tom));

bill.emit('says', 'Hello guys!');
tom.emit('says', 'Hello Bill');
