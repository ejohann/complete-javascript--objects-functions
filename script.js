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
/*
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
*/


// Primitives vs Objects
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 39
};

var obj2 = obj1;
obj1.age = 38;

console.log(obj1.age);
console.log(obj2.age);


/// Functions

var age = 39;
var obj = {
    name: 'Johanne',
    city: 'London'
};

function change(a, b)
 {
     a = 30;
     b.city = 'Victoria';
 }

change(age, obj);

console.log(age);
console.log(obj.city);
*/

/*
var years = [1980, 1997, 1948, 2005];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++)
        {
            arrRes.push(fn(arr[i]));
        }
    return arrRes;
}

function calculateAge(el){
    return 2019 - el; 
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
     if(el >= 18 && el <= 81)
      {
        return Math.round(286.9 - (0.67 * el));
      }
    else
      {
          return -1;
      }
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

// Functions returning functions

function interviewQuestions(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ' can you please explain what is UX design?');
        }
     }
    else if(job === 'teacher'){
       return function(name){
           console.log('What subject do you teach ' + name + '?');
       }   
     }
    else
     {
       return function(name){
           console.log('Hello ' + name + ' what do you do?');
       }      
     }
    
}

var teacherQuestion = interviewQuestions('teacher');
var designerQuestion = interviewQuestions('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');


interviewQuestions('teacher')('Mike');




















