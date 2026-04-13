let count = 0;
function Person(name, address){
    this.name = name;
    this.address = address;
    count++;
}

Person.prototype.getInfo = function(){
    console.log(`Name: ${this.name}, Address: ${this.address}`);
    }

Person.prototype.getCount = function (){
    console.log(`Persons Created: ${count}`)
    }

module.exports = Person;