'use strict';

 console.log('What\'s up!');

let responseOne = prompt('What is your name?');

  alert(`Welcome ${responseOne}! Ready to play a guessing game about me?`);
  console.log ('User entered in ' + responseOne);

let answerOne = prompt('Do I have a cat?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('Yes I do have a cat');
  console.log ('User entered in ' + answerOne);
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('sorry you are incorrect');
}

let answerTwo = prompt('Do I play music?').toUpperCase();

if(answerTwo === 'YES' || answerTwo === 'Y'){
  alert('You bet I do!');
  console.log ('User entered in ' + answerTwo);
} else if(answerTwo === 'NO' || answerTwo === 'N'){
  alert('sorry you are incorrect');
}

let answerThree = prompt('Have I ever lived outside of USA?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert(`Correct ${responseOne}!! I lived in Chile for 10 months.`);
  console.log ('User entered in ' + answerThree);
} else if (answerThree === 'no' || answerThree === 'n'){
  alert('Nice try!');
}

let answerFour = prompt('Do I like to cook?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  alert('Yes. I love cooking with my partner.');
  console.log ('User entered in ' + answerFour);
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('fail!');
}

let answerFive = prompt('Is my astrological sign Scorpio?').toLowerCase();

if(answerFive === 'yes' || answerFive ==='y'){
  alert('No way! I\'m an Aquarius.');
  console.log ('User entered in ' + answerFive);
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('That\'s right! I\'m an Aquarius!');
}

  alert(`Thanks for playing ${responseOne}!`);

