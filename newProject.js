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

let computerChoices = ['r','p','s'];
document.onkeyup = function(event){
   let userChoice = event.key;
   let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
   console.log(computerGuess);
   let wins = 0;
   let losses = 0;
   let draws= 0;
   
   if((userChoice === 'r') || (userChoice === 'p') || (userChoice === 's')) {
       alert(`user pick ${userChoice}`)
       alert(`computer pick ${computerGuess}`)
       if((userChoice === 'p' && computerGuess === 'r') ||
          (userChoice === 'r' && computerGuess === 's') || 
          (userChoice === 's' && computerGuess === 'p')) {
               alert('you win'); wins++
          }
          else if
         ((userChoice === 'p' && computerGuess === 's') ||
          (userChoice === 'r' && computerGuess === 'p') || 
          (userChoice === 's' && computerGuess === 'r')) {
             alert('you lose'); losses++
          }else{
              alert('it\'s a draw'); draws++
          }
       
    }else(alert('Please Pick between R, P, S'));


}