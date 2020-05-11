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

const todo = {
    add: function(){
        console.log('Add to do..')
    }
}

todo.add();


