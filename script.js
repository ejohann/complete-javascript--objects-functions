// Function constructor

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}


Person.prototype.calculateAge =  function(){
        console.log(2019 - this.yearOfBirth);
    };


var john = new Person('John', 1980, 'developer');

john.calculateAge();

var jane = new Person('Jane', 1997, 'designer');
jane.calculateAge();

var mark = new Person('Mark', 1948, 'retired');
mark.calculateAge();