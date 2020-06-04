// FIZZBUZZ

// function fizzbuzz() {

//     for(var i = 1; i <= 100; i++) {
//          output = '';

//         if(i % 3 === 0) { output += 'fizz'};

//         if(i % 5 === 0) { output += 'buzz'};

//         if(output === '') { output = i }

//         console.log(output)
//     }
//     return output;
    
// }

// fizzbuzz();


// PALINDROME

// function isPalindrome(word) {

//     for(var i = 0; i < word.length; i++) {

//         if(word[i] !== word[word.length - (i + 1)]) 
//             return false;

//     }
//     return true;
// }
// console.log(isPalindrome('racecar'));

// console.log(isPalindrome('car'));

// var name = prompt('what is your name?')

// var age = prompt( 'how old are you?')

// alert('hi my name is ' + name + " and i am " + age + ' old')

// if( age < 21) {
//     alert('too young too drink')
// }
// else(
//     alert('drinks!!')
// )



// const name = 'Lou';
// const age  = 31;
// const job  = 'web Developer';
// const city = 'Charlotte';
// let html;

// function say(){
//     return 'hello'
// }

// html = `
//         <h1>Lou</h1>
//     <ul>
//         <li> Name: ${name}</li>
//         <li> Age: ${age}</li>
//         <li> Job: ${job}</li>
//         <li> City: ${city}</li>
//         <li> Math: ${2+2}</li>
//         <li> func: ${fizzbuzz()}</li>
//     </ul>
// `;
// document.body.innerHTML = html;


// val = Number([1,2,3,])
// console.log(val)

// const numbers = [3, 59, 90, 09, 78, 45];
// const numbers2 = new Array(10, 11, 12, 13);
// const fruits = ['apple', 'oranges', 'water mellon', 'banana', 'grapes']

// let val;
// // get array length
// val = numbers.length;

// numbers.push(900)

// numbers.reverse();

// val = fruits.sort();

// val = numbers.sort(function(x,y){
//     return x - y;
// });

// val = numbers.sort(function(x,y){
//     return y - x
// });

// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50)

// console.log(val);

// console.log(numbers);


// const person = {
//     firstName: 'lou',
//     lastName: 'Celestin',
//     age: 31,
//     email: 'lou@gmail.com',
//     hobbies: ['movies', 'sports'],
//     address: {
//         city: 'charlotte',
//         state: 'NC',
//     },
//     getBirthYear: function() {
//         return 1988;
//     }

// }

// let val;

// val = person;
// val = person.firstName;
// val = person. address.city;

// console.log(val);

// SWITCHES

// const color = 'red';

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'green':
//         console.log('yes it is green');
// }
// let day;

// switch(new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }

// console.log(`Today is ${day}.`);

// FUNCTION

// function declaration

// function greet(firstName = ' mike', lastName = ' black') {
//     return `Hello ${firstName} ${lastName}, welcome back.`
// }

// console.log(greet('Lou', 'Celestin'))

// // function expressions

// const square = function(x=3){
//     return x*x
// };

// console.log(square(9))

// immediately Invoke Function Expressions - IIFEs

// (function(){
//     console.log('iife ran')
// })();

// (function(name){
//     console.log('Hello ' + name)
// })('Lou');

// const todo = {
//     add: function(){
//         console.log('Add to do..')
//     },
//     edit: function(id){
//         console.log(`Edit todo ${id}`)
//     }  
// }
// todo.delete = function(){
//     console.log('Delete todo ...')
// }

// todo.add();
// todo.edit(22);
// todo.delete();



// FOR LOOP

// for(let i = 0; i <= 10; i++){
//     // console.log('Number ' + i);
//     if(i === 2) {
//         console.log(' Number 2 is my favorite number');
//         continue;
//     }
//      else{console.log('number ' + i)} 
// }

// let val;

// val = Math.floor(Math.random()* 50 + 1);

// console.log(val);



// WHILE LOOP

// const cars = ['Ford', 'Benz', 'BMW', 'Toyota'];

// let i = 0;

// while(i < cars.length ){
//     console.log(cars[3]);
//     break
//     i++;
// }




// DO WHILE





// const cars = ['Ford', 'Benz', 'BMW', 'Toyota'];

// // for(let i = 0; i < cars.length; i++) {
// //     console.log(cars[i])
// // }

// // cars.forEach(function(i){
// //     console.log(i)
// // })

// cars.forEach((i => {
//     console.log(i)
// }))

// let i = 100; 


// do {
//     console.log('this is a' + [i])
//     i++
// }

// while (i < 10)

// MAP
// const users = [
//     {id: 1, name:'Lou'},
//     {id: 2, name:'Sadia'},
//     {id: 3, name:'Eli'},
//     {id: 4, name:'Ezra'},
// ];

// const ids = users.map(function(user){
//    return user.id
// });

// console.log(ids)

// const user = {
//     firstName: 'Lou',
//     lastName: 'Celestin',
//     age: 31,
// };

// for(let x in user){
//     console.log(`${x} : ${user[x]}`)
// }

// WINDOW METHODS / OBJECTS / PROPERTIES

// alert
// alert('hello world');

// prompt
// const input = prompt();
// alert(input);
// console.log(input);

// confirm 
// if(confirm("are you sure?")) {
//     console.log('YES');
// }else{
//     console.log("NO!!");
// }

// let val;


// val = window.outerHeight;
// val = window.innerWidth;
// val = window.screenX;
// val = window.location

// console.log(val);


// let val;

// val = document;
// val = document.all;
// val = document.all[5];
// val = document.all.length;
// val = document.head;
// val = document.domain;
// val = document.contentType;
// val = document.forms;

// val = document.links[0];
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// console.log(val)

// documnet.getElementById()

// console.log(document.getElementById('task-title'));

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
// console.log(document.getElementById('task-title').className);

// document.getElementById('task-title').innerHTML = '<span style= "color:red">task list</span>'

// console.log(document.querySelector('#task-title'))

// console.log(document.getElementById('logo').innerHTML='me and you');
// console.log(document.body.innerHTML='wow');
// console.log(document.documentElement='holy shit');


// console.log(document.getElementById('about').innerHTML = document.getElementById('contact'));

// console.log(document.getElementById('about').inner);

// let parent = document.createElement('p');
// let child = document.createTextNode('this is fucking awesome');
// parent.appendChild(child);
// let all = document.getElementById('about').appendChild(child);

// let lis = document.getElementsByTagName('li');
// console.log(lis[0]);
// console.log(lis);
// lis[0].style.color = 'red';
// lis[2].textContent = 'this is Lou here getting it in';

// // convert html collections to arra

// lis = Array.from(lis)
// lis.reverse();
// console.log(lis)

// QUERY SELECTOR

// const items = document.querySelectorAll('ul li')

// items.forEach(function(i, index){
//     i.textContent = `${index}: hello`
// });

// const liOdd = document.querySelectorAll('li')
// const liEven = document.querySelectorAll('li')

// liEven.forEach(function(i, index){
//     i.style.background = '#ccc';
// });


// console.log(items);

// let likeSteak = confirm('do you like steak?');

// if (likeSteak === true) {
//     document.write('here is a steak sandwich')
// } else {
//     document.write('Here\'s a tofu avocado sandwich')
// }

// let birthYear = prompt('what is your birth year?')

// if(birthYear < 2002) {
//     alert('here have a shot')
// }else if(birthYear > 2002) {
//     alert('no shots for you')
// }else{
//     alert('you just made it, have a shot')
// }

// let cars = ['benz', 'bmw', 'lex', 'tesla'];

// for (let i = 0; i < cars.length; i++) {

//     let car = cars[i]

//     if(car[0]==='b'){
//         alert('its the bnz or the beamer')
//     }else if( car[0] === 't') {
//         console.log('its the tesla')
//     }else(console.log('its the lex'))

//     console.log(cars[i]);
// }


// let myLot = ['beamer', 'bemz', 'bentley', 'nissan', 'toyota', 'tesla'];

// for(let i = 0; i < myLot.length; i++) {
//     console.log(myLot[i]);
//     let car = myLot[i];

//     if(car[0] === 'b' || car[0] ==='t'){
//         console.log('it is luxury')
//     }
//     else if( car[0] !=='b') {
//         console.log('its either the nissan or something else')
//     }
// }

// let userText = document.getElementById('user-text');

// document.onkeyup = function(event) {
//     userText.textContent = event.key;
// }

// R P S

//     let computerChoices = ['r','p','s'];

//     let wins = 0;
//     let losses = 0;
//     let draws= 0;

//     let userChoiceText = document.getElementById('youpick');
//     let computerChoiceText = document.getElementById('computerpick');
//     let winCount = document.getElementById('wins');
//     let loseCount = document.getElementById('loses');
//     let drawCount = document.getElementById('draw');

//     document.onkeyup = function(event){

//    let userChoice = event.key;
//    let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// //    console.log(computerGuess);
   
   
//    if((userChoice === 'r') || (userChoice === 'p') || (userChoice === 's')) {
//     //    alert(`user pick ${userChoice}`)
//     //    alert(`computer pick ${computerGuess}`)
//        if((userChoice === 'p' && computerGuess === 'r') ||
//           (userChoice === 'r' && computerGuess === 's') || 
//           (userChoice === 's' && computerGuess === 'p')) {
//               wins++;
//             //    alert('you win'); 
//           }
//           else if
//          ((userChoice === 'p' && computerGuess === 's') ||
//           (userChoice === 'r' && computerGuess === 'p') || 
//           (userChoice === 's' && computerGuess === 'r')) {
//               losses++;
//             //  alert('you lose'); 
//           }else{
//               draws++;
//             //   alert('it\'s a draw'); 
//           }

       
//           userChoiceText.textContent = 'You chose: ' + userChoice;
//           winCount.textContent = 'Wins : ' + wins;
//           computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
//           loseCount.textContent = 'Losses: ' + losses;
//           drawCount.textContent = 'Draw: ' + draws;
      

//     }else(alert('Please Pick between R, P, S'));

//     // userChoiceText.textContent = `you chose: ${userChoice}`;
//     // winCount.textContent = `Wins : ${wins}`;
//     // computerChoiceText.textContent = `the computer chose: ${computerGuess}`
//     // loseCount.textContent = `Losses : ${losses}`;
//     // drawCount.textContent =` Draw :  ${draws}`;

// };


// let favTVshows = [];
// let tvShow;

// for(let i = 1; i < 4; i++) {
//     tvShow = prompt(`What is your # ${i} favorite TV show?`)

//     favTVshows.push(tvShow);

//     for(let f = 0; f < favTVshows.length; f++) {
//         alert(favTVshows[f])
//     }
// }

// let result = {
//     0:0,
//     1:0,
//     2:0
// };
// for(let i = 0; i < 10000; i++) {
//     let n = Math.floor(Math.random() * 3);
//     result[n]++;
// }
// console.log(result);

// let counts;

// for(let c = 0; c < 1000; c+=15) {
//     console.log(c)
// }

// let brands = ['nike', 'polo', 'adidas','prada'];
// let cars = ['benz', 'toyota', 'nissan', 'lexus'];
// let food = ['brocoli', 'spinash', 'manzana', 'banana'];
// let drinks = ['smoothie', 'beer', 'water', 'wine'];

// function printArr(arr){
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
//     console.log('---------------')
// };
// printArr(brands);
// printArr(cars);
// printArr(food);
// printArr(drinks);

// function adder(x, y, z){
//     console.log(x + y + z)
// };
// adder(1,3,5);

// function mukltipier(x,y,z){
//     console.log(x*y*z)
// };
// mukltipier(3,9,8);

// function isString(x,y,z){
//     if(typeof x === 'string' && typeof y === 'string' && typeof z === 'string'){
//         console.log('yup all strings')
//     }
//     else{
//         console.log('not all are strings')
//     }
// };

// isString('n',9,'o')

// isString('yes', 'oh' , 'yup')


// function vowelChecker(x){
//     x = x.toLowercase();
//     if(x === 'a'|| x === 'e' || x === 'i' || x === 'o' || 'u') {
//         console.log('is vowel')
//     }
//     else{
//         console.log('not a vowel')
//     };
// }
// vowelChecker('v');
// vowelChecker('o');

// function adder(x,y,z){
//     return x + y + z;
// }

// let result = adder(5,5,5);

// console.log(result);

// let numbs = [3, 4, 1, 5, 8, 9, 0, 5];

// for(let i = 0; i < numbs.length; i++){
//     if(numbs[i] > 5) {
//         console.log(`this number ${numbs[i]} is greater than 5`);
//     }else{
//         console.log('not greater than five!')
//     }
// };


// let LouCelestin = {
//     fName: 'Lou',
//     LName: 'Celestin',
//     DOB:'09.22.88',
//     city:'Charlotte',
//     age: '30'
// };

// console.log(LouCelestin.fName);
// console.log(LouCelestin.age);


// the psychic game

// let computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let wins = 0;
// let losses = 0;
// let guessesLeft = 10;
// let yourGuesses = [];

// let winsText = document.getElementById('wins');
// let lossestext = document.getElementById('losses');
// let guessesLeftText = document.getElementById('guesses-left');
// let guessesText = document.getElementById('your-guesses');

// let computerpick = computerChoice[Math.floor(Math.random() * computerChoice.length)];
// console.log(computerpick);

// document.onkeyup = function(event) {
//         let userPick = event.key;
    
//         yourGuesses.push(userPick);
        
//         for(let i = 1; i < yourGuesses.length; i++){
//             if(userPick === yourGuesses[i]){
//                 alert('pick different letter')
//             }
//         }

//             if(userPick === computerpick) {
//                 wins++;
//             }else{
//                 guessesLeft--;
//             }

//             if(guessesLeft === 0) {
//                 losses++;
//             } 
//         console.log(userPick);

//         winsText.textContent = `Wins: ${wins}`;
//         lossestext.textContent = `Losses: ${losses}`;
//         guessesText.textContent = `Gusses Left: ${guessesLeft}`;
//         guessesText.textContent = `Your guesses so far: ${yourGuesses}`;

//     };


// OBJECT AND METHODS!!

// let car = {
//     make: 'benz',
//     model: 'e-350',
//     color: 'black',
//     mileage: 70000,
//     isWorking: true,

//     driveToWork: function(){
//         alert(this.mileage);

//         this.mileage = this.mileage + 8; 

//         alert('new mileage: ' + this.mileage);
//     },

//     driveAroundTheWorld: function(){

//         alert('old mileage: ' + this.mileage)

//         this.mileage = this.mileage + 24000;

//         alert('New mileage: ' + this.mileage);
//         alert('car needs a tune up');

//         this.isWorking = false;
//     },

//     getTuneUp: function() {
//         alert('car is ready to go')
//         this.isWorking = true;
//     },

//     honk: function() {
//         alert('Honk! Honk!')
//     }
// };

// car.driveAroundTheWorld();

// document.onkeyup = function(event){
//     let userKey = event.key;

//     if(userKey === 'h'){
//         car.honk();
//     }else if (userKey === 'd'){
//         car.driveAroundTheWorld()
//     }else if( userKey === 'w'){
//         car.isWorking
//     }else{

//     }
// }

// switch(userKey) {
//     case 'h':
//     case 'H':
//         car.honk();
//         break;
//     case 'd':
//     case 'D':
//         car.driveToWork();
//         break;
//     default:
//         alert('please press one of those buttons to play')
// }



// let questions = [
//     {q:'The sky is blue?',a:'t' },
//     {q:'Coding is rewarding?', a:'t'},
//     {q:'There are 300 days in a year?', a:'f'},
//     {q:'Reading is excercise for the brain?',a:'t'},
//     {q: 'Consistency if not the key to learning ne things', a:'f'}
// ];

// let score = 0;
// let questionIndex = 0;

// function renderQuestion() {
//     if(questionIndex <= (questions.length - 1)) {
//         document.querySelector('#question').innerHTML = questions[questionIndex].q;
//     }
//     else {
//         document.querySelector('#question').innerHTML = 'Game Over';
//         document.querySelector('#score').innerHTML = 'final Score: ' + score + 'out of ' + questionIndex;
//     }
// }

// function updateScore() {
//     document.querySelector('#score').innerHTML = 'Score: ' + score;
// }

// renderQuestion();
// updateScore();

// document.onkeyup = function(event){
//     if(questionIndex === questions.length) {
//         return;
//     }
//     let userInput = event.key.toLowerCase();
    
//     if(userInput === 't' || userInput === 'f') {
//         if(userInput === questions[questionIndex].a){
//             alert('correct');
//             score++;
//             updateScore();
//         }
//         else {
//             alert('Wrong');
//         }
//         questionIndex++;
//         renderQuestion();
//     }
// }

// function numIntake(num) {

//     let result = 0;

//     for(let i = 1; i <= num; i ++){
//         result = result + i;

//     }
//     return result;
// };

// console.log(numIntake(2));
// console.log(numIntake(4));
// console.log(numIntake(10));

// function numAdds(num) {

//     let result = 0;

//     for(let i = 1; i <=num; i++) {
//         result = result + i;
//     }
//     return result;
// };

// console.log(numAdds(2));
// console.log(numAdds(4));
// console.log(numAdds(10));

// let drinkList = [
//     'coffee',
//     'juice',
//     'icecream',
//     'tea',
//     'milk',
//     'smoothie',
//     'jungle juice'
// ];

// // let targetDiv = document.getElementById('empty-div');

// // for(let i = 0; i < drinkList.length; i++){
// //     let newDrink = document.createElement('h2');
// //     newDrink.textContent = drinkList[i];
// //     targetDiv.appendChild(newDrink)
// // }

// for(let i = 0; i < drinkList.length; i++){
//     $('#empty-div').append('<h1>' + drinkList[i] + '</h1>')
// }



$(document).ready(function() {

    let veganBurger = 0;
    let avocadoBurger = 0;
    let beyondBurger = 0;

    $('#click-me').on('click', function(){
        alert('i\'ve been clicked' )
    });

    $('#vegan-burger').on('click', function(){
        
        alert('you just ate a vegan burger')
        veganBurger++;
        alert('you just ate ' + veganBurger + ' vegan burger')
    })
    $('#avocado-burger').on('click', function(){
        alert('you just ate an avocado burger')
        avocadoBurger++;
        alert('you just ate ' + avocadoBurger + ' avocado burger' )
    })
    $('#beyond-burger').on('click', function(){
        alert('you just ate a beyond burger')
        beyondBurger++;
        alert('you just ate ' + beyondBurger + ' beyond Burger')
    })

});
