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
