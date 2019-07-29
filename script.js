// Function constructor

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


var john = new Person('John', 1980, 'developer');

console.log(john);