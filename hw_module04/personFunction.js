const events = require('events');
const util = require('util');

function Person(name){
    events.call(this);
    this.name = name;
}

util.inherits(Person, events);

Person.prototype.speaks = function(msg){
    console.log(`${this.name} says: ${msg}`);
}

const bill = new Person('Bill');
const tom = new Person('Tom');

bill.on('says', bill.speaks.bind(bill));
tom.on('says', tom.speaks.bind(tom));

bill.emit('says', 'Hello all!');
tom.emit('says', 'Hello Bill!');

