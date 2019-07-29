// Function constructor
/*
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge =  function(){
        console.log(2019 - this.yearOfBirth);
    };

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1980, 'developer');
var jane = new Person('Jane', 1997, 'designer');
var mark = new Person('Mark', 1948, 'retired');

mark.calculateAge();
jane.calculateAge();
john.calculateAge();

console.log(mark.lastName);
console.log(jane.lastName);
console.log(jane.lastName);
*/


// Object.create

var personProto = {
    calculateAge : function(){
        console.log(2019 - this.yearOfBirth);
     }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1980;
john.job = 'developer';

console.log(john);
john.calculateAge();

var jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: 1997},
    job: {value: 'designer'}
})

console.log(jane);
jane.calculateAge();