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
/*
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
*/


// Immediately Invoked Function Expressions - IIFE
/*
//regular function
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//IIFE
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/


// Closures
/*
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(66)(1980);

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1997);
retirementIceland(1997);
retirementGermany(1997);


function interviewQuestions(job){
        return function(name){
             if(job === 'designer'){
                    console.log(name + ' can you please explain what is UX design?');
                }
              else if(job === 'teacher'){
                    console.log('What subject do you teach ' + name + '?');
                } 
              else
               {
                   console.log('Hello ' + name + ' what do you do?');
               }        
           }
 }
    
 var teacherQuestion = interviewQuestions('teacher');
 teacherQuestion('John');

*/

 
  // Bind, call and apply
/*
var john = {
    name: 'John',
    age: 38,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ' I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        }
    else if(style === 'friendly'){
           console.log('Hey what\'s up?  I\'m ' + this.name + ', I\'m  a ' + this.job + ' and I\'m ' + this.age + ' years old.  Have a nice ' + timeOfDay + '.');     
       }
    }   
};


var emily = {
    name: 'Emily',
    age: 38,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');



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

function isFullAge(limit, el){
    return el >= limit;
}



var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);


*/


/*************************************************************
****  CODING CHALLENGE 7
*************************************************************/

/*
      1. Build a function constructor called Question.  A question should include:
        a.  Question itself
        b.  The answers from which the player can choose the correct one (choose an adequate data structure)
        c.  Correct answer (HINT: use a number)
      2.  Create a couple of questions using the constructor
      3. Store them all inside an array
      4. Select one random question and log it to the console, together with the possible answers (each question    should have a number) HINT: write a method for the Question objects for this task.
      5.  Use the 'prompt' function to ask the user for the correct answer.  The user should input the number of the correct answer, such as you displayed it on Task 4.
      6.  Check if the answer is correct and print to the console whether the answer is correct or not.  HINT: write another method for this.
      7.  Make sure all you code is private.
*/     

/*
(function(){
    
    var Question = function(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};

function checkAnswer(answer, correctAnswer){
    if(answer === correctAnswer)
      {
        console.log('Congratulations!!! You are correct');
      }
     else
      {
        console.log('Sorry, your answer is incorrect');        
      }
}

function randomQuestion(arr){
    return Math.floor(Math.random() * (arr.length));
}

var firstQuestion = new Question('What is the capital of England?', ['Paris', 'New York', 'London', 'Milan'], 2);
var secondQuestion = new Question('What is the color of grass?', ['Yellow','Red','White','Green'], 3);
var thirdQuestion = new Question('Who is the best programmer?', ['Johanne Lewis', 'Lewis Hamilton', 'Michael Jordan', 'Cardi B'], 0);

var questions = [firstQuestion, secondQuestion, thirdQuestion];

var randomQuestion = questions[randomQuestion(questions)];

(function (question){
    console.log(question['question']);
    var answers = question['answers'];
    for(var i = 0; i < answers.length; i++)
        {
            console.log(i + ' ' +answers[i]);
        }
    var answer = prompt('Please enter the number in the console, which corresponds to the correct answer');
    checkAnswer(parseInt(answer), question['correctAnswer']);
})(randomQuestion);
        
})();
*/


/**********************************************************************
****  CODING CHALLENGE 7 - EXPERT LEVEL
**********************************************************************/

/*
      8. After you display the result, display a next random question.  
            HINT: write a function to call it right after display the result
      9. Be careful the game never ends.  So include the option to quit the game if the user writes 'exit' instead of the answer. 
      10. Track the user's score to make the game more fun.
           HINT: Use the power of closures for this
      11. Display the score in the console.  HINT: user another method for this
*/  

/*
(function(){
    
    var Question = function(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
};
    
var totalScore = 0;
    
function checkAnswer(answer, correctAnswer){
    if(answer === correctAnswer)
      {
        console.log('Congratulations!!! You are correct');
        totalScore += 1;
      }
     else
      {
        console.log('Sorry, your answer is incorrect'); 
      }
    displayScore();
    playGame();
}

function displayScore(){
   console.log('Score: ' + totalScore);
}
    
function calcScore(thisScore, totalScore){
    totalScore = thisScore + totalscore;
}

function randomQuestion(arr){
    return Math.floor(Math.random() * (arr.length));
}
    
 function nextQuestion(question){
    console.log(question['question']);
    var answers = question['answers'];
    
    for(var i = 0; i < answers.length; i++)
        {
            console.log(i + ' ' + answers[i]);
        }
    var answer = prompt('Please enter the number, which corresponds to the correct answer.  You may type \'exit\' at any point to quit game');
    
    if(answer === 'exit')
      {
         console.log('Thank you for playing!');
         displayScore();
      }
    else
      {
        checkAnswer(parseInt(answer), question['correctAnswer']);
      }
 }
    
var firstQuestion = new Question('What is the capital of England?', ['Paris', 'New York', 'London', 'Milan'], 2);
var secondQuestion = new Question('What is the color of grass?', ['Yellow','Red','White','Green'], 3);
var thirdQuestion = new Question('Who is the best programmer?', ['Johanne Lewis', 'Lewis Hamilton', 'Michael Jordan', 'Cardi B'], 0);
var forthQuestion = new Question('What did the carpet say to the floor?', ['Don\'t move I\'ve got you covered', 'Hello there', 'You are so hard', 'We go well together'], 0);
var fifthQuestion = new Question('When it rains...', ['it is wet', 'it pours', 'it gets dark', 'it is nice'], 1);
var sixthQuestion = new Question('When do you see stars?', ['When it is bright', 'When it is full moon', 'When it is dark', 'In the daytime'], 2);

var questions = [firstQuestion, secondQuestion, thirdQuestion, forthQuestion, fifthQuestion, sixthQuestion];

function playGame(){
    var question = questions[randomQuestion(questions)];
    nextQuestion(question);
}    
 playGame();        
})();

*/



/**********************************************************************
****  CODING CHALLENGE 7 - Lecturer Solution
**********************************************************************/

(function(){
    
function Question(question, answers, correct){
    
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    
    for(var i = 0; i < this.answers.length; i++){
        console.log(i + ' : ' + this.answers[i]);
    }
}


Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct){
        console.log('Correct answer!')
     }
    else
     {
         console.log('Incorrect answer, try again!');
     }
}

var q1 = new Question('Is JavaScript the coolest programming language in the world?', ['Yes', 'No'], 0);
var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
var q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);


questions[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer'));

questions[n].checkAnswer(answer);    
    
    
})();



