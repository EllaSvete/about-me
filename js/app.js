'use strict';

console.log('What\'s up!');
let counter = 0;
let responseOne = prompt('What is your name?'); 

  alert(`Welcome ${responseOne}! Ready to play a guessing game about me?`);
  console.log ('User entered in ' + responseOne);

let answerOne = prompt('Do I know how to juggle?').toLowerCase(); 

if(answerOne === 'yes' || answerOne === 'y'){
  counter++;
  console.log(counter);
  alert('Yep. I\'m a part-time clown!');
  console.log ('User entered in ' + answerOne);
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Wrong answer!');
}

let answerTwo = prompt('Do I play music?').toUpperCase(); 

if(answerTwo === 'YES' || answerTwo === 'Y'){
  counter++;
  alert('You bet I do!');
  console.log ('User entered in ' + answerTwo);
} else if(answerTwo === 'NO' || answerTwo === 'N'){
  alert('Sorry. You are incorrect.');
}

let answerThree = prompt('Have I ever lived outside of USA?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  counter++;
  alert(`Correct ${responseOne}!! I lived in Chile for 10 months.`);
  console.log ('User entered in ' + answerThree);
} else if (answerThree === 'no' || answerThree === 'n'){
  alert('Nice try!');
}

let answerFour = prompt('Do I like to cook?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  counter++;
  alert('Yes. I love cooking with my partner.');
  console.log ('User entered in ' + answerFour);
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('fail!');
}

let answerFive = prompt('Is my astrological sign Scorpio?').toLowerCase();

if(answerFive === 'yes' || answerFive ==='y'){
  counter++;
  alert('No way! I\'m an Aquarius.');
  console.log ('User entered in ' + answerFive);
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('That\'s right! I\'m an Aquarius!');
}


let correctNumber = '1';
let userGuesses = 4;
  
while(userGuesses !== 0){
  userGuesses--;
  let userNumber = prompt('How many cats do I have?');
  if(userNumber === correctNumber){
    counter++;
    alert('you are correct!');
    userGuesses = 0; }
  if(userNumber > 1 ) {
    alert('too high');
  }
  if(userNumber < 1 ) {
    alert('too low');
  }
  if(userGuesses === 0){
    alert('I have 1 cat.');
  }
}

  let places = ['Greece' , 'Vietnam' , 'France']
//  console.log(places.length);
  let userGuessesTwo = 6;

for(let i = 0; i < userGuessesTwo; i++) {
   let userAnswer = prompt('Where are my top three places to travel?');

for(let j = 0; j < places.length; j++) {
   if(userAnswer === places[j]) {
    counter++;
   alert('Nicely done!');
   break;
  }
}
  if(userAnswer === ) 
    alert('Close, but not close enough!');
}


  { alert(`Thanks for playing ${responseOne}! You got ${counter} correct out of 7!`);
}