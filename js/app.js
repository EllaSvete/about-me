'use strict';

console.log('hey world!');

let answerOne = prompt('Do I have a cat?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y'){
  alert('Yes I do have a cat');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('sorry you are incorrect');
}