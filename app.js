// Data types


// String methods
/* console.log('Hello World!'.length);
console.log('Hello World!'.charAt(4));
console.log('Hello World!'.indexOf('Wor'));
console.log('Hello World!'.lastIndexOf('llo'));
console.log('Hello World!'.slice(0, 4));
console.log('Hello World!'.toUpperCase());
console.log('Hello World!'.toLowerCase());
console.log('Hello World!'.includes('rld'));
console.log('Hello World!'.toUpperCase());
console.log('Hello World!'.split(' ')); */

// Number methods
/* const myNum = 14
const myFloat = 14.01
const myString = '14'
const myStringName = 'Dave'

console.log(myString === myNum);

console.log(myString + 1);

console.log(myNum + myString);

console.log(Number(myString) + myNum);

console.log((Number(myStringName)));

console.log(Number(false));

console.log(Number.isInteger(myString));
console.log(Number.isInteger(myNum));

console.log(Number.parseFloat('14.123abc'));
console.log(Number.parseFloat('14.123abc').toFixed(2));

console.log(Number.parseInt('14.123abc'));

console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString));

console.log(Number.parseFloat('14.789xyz').toFixed(2).toString());

console.log(Number.isNaN('Dave'));
console.log(isNan('Dave')); */

// Map methods
/* console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.5));
console.log(Math.ceil(3.4));
console.log(Math.floor(3.4));

console.log(Math.pow(2, 10));
console.log(Math.min(2, 5, 9));
console.log(Math.max(2, 5, 9));
console.log(Math.random);

console.log(Math.floor(Math.random() * 10) + 1);  */

//Challenge
/* const anyName = 'Jane';

console.log(anyName.charAt(Math.floor(Math.random() * myName.length))); */

// If...Else statement
/* let customerIsBanned =  false
let soup  = "chicken noodle soup"
let reply
let crackers = true

if(customerIsBanned) {
    reply = 'No soup for you!'
} else if(soup && crackers) {
    reply = 'Here\'s your order of ' + soup + ' and crackers' // or `Here's your order of ${soup}` <- string literal
} else {
    reply = ' Sorry, we\'re out of soup'
}
console.log(reply) */

/* let testScore = 50;
let collegeStudent = true;
let grade;

if(testScore >= 90) {
    grade = 'A'
} else if(testScore >= 80) {
    grade = 'B'
} else if(testScore >= 70) {
    grade = 'C'
} else if(testScore >= 60) {
    grade = 'D'
} else {
    if (collegeStudent) {
        grade = 'U'
    }
    else {
        grade = 'F'
    }
}

console.log(grade); */

// Decision tree
/* if (playerYou === computerBot) {
    //Tie game
} else if (playerYou === 'rock') {
    if(computerBot === 'paper') {
        //Computer wins
    } else {
        //Player wins
    }
} else if (playerYou === 'paper') {
    if(computerBot === 'scissors') {
        //Computer wins
    } else {
        //Player wins
    }
} else {
    if (computerBot === 'rock') {
        //Computer wins
    } else {
        //Player wins
    }
} */

// Swich statement

/* switch (Math.floor(Math.random() * 5 + 1)) {

    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('No match');
} */
/* let rockPaperScissors = ['rock', 'paper', 'scissors']
let playerYou = 'rock'
let computerBot = rockPaperScissors[Math.floor(Math.random() * 3)]

console.log('You:' + playerYou);
console.log('PC:' + computerBot);

switch (playerYou) {
    case computerBot:
        console.log('Tie game!');
        break;
    case 'rock':
        if (computerBot === 'paper') {
            console.log('Computer won!');
        } else {
            console.log('You won!');
        }
        break;
    case 'paper':
        if (computerBot === 'scissors') {
            console.log('Computer won!');
        } else {
            console.log('You won!');
        }
        break;
    default:
        if (computerBot === 'rock') {
            console.log('Computer won!');
        } else {
            console.log('You won!');
        }  
} */

// Ternary operator

// condition ? ifTrue : ifFalse;
/* let soup = 'Chicken Noodle Soup';
let isCustomerBanned = false;

let soupAccess = isCustomerBanned 
? 'Sorry, no soup for you'
: soup
? `Yes, we have ${soup} today.`
: 'Sorry, no soup today.'
console.log(soupAccess); */

/* let testScore = 70;
let myGrade = testScore > 89 ? 'A'
:testScore > 79 ? 'B'
:testScore > 69 ? 'C'
:testScore > 59 ? 'D'
: 'F';
console.log('My test grade is a ' + myGrade);
 */

/* let playerYou = 'scissors';
let computerBot = 'paper';

let result = playerYou === computerBot 
? 'Tie game!'
: playerYou === 'rock' && computerBot === 'paper' 
? 'Computer won!'
: playerYou === 'paper' && computerBot === 'scissors' 
? 'Computer won!'
: playerYou === 'scissors' && computerBot === 'rock' 
? 'Computer won!'
: 'You won!'

console.log(result); */

// User input
/* alert('Hello World!');

let myBool = confirm('OK === True \n Cancel === False');

console.log(myBool); */

/* let name = prompt('Please enter your name.');
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log('You did\'t enter your name');
} */

// First game

/* let playGame = confirm ('Shall We Play 🪨, 📜, ✂️ ?');

if (playGame) {
    let playerChoice = prompt ('Please enter rock/paper/scissors. 👇');
    
    if (playerChoice) {
        
        let playerYou = playerChoice.trim().toLowerCase();
        if (playerYou === 'rock' || playerYou === 'paper' || playerYou === 'scissors') {

            let computerChoice = Math.floor(Math.random() * 3 + 1)
            let computerBot = computerChoice === 1 ? 'rock'
            : computerChoice === 2 ? 'paper'
            : 'scissors'

            let result = playerYou === computerBot
                         ? `You:  ${playerChoice} \n Computer: ${computerBot} \n Tie game! 💥`
                         : playerChoice === 'rock' && computerBot === 'paper'
                         ? `You:  ${playerChoice} \n Computer: ${computerBot} \n Computer won! 🤖`
                         : playerChoice === 'paper' && computerBot === 'scissors'
                         ? `You:  ${playerChoice} \n Computer: ${computerBot} \n Computer won! 🤖`
                         : playerChoice === 'scissors' && computerBot === 'rock'
                         ? `You:  ${playerChoice} \n Computer: ${computerBot} \n Computer won! 🤖`
                         : `You:  ${playerChoice} \n Computer: ${computerBot} \n You won! ✨`

            alert(result);
            let playAgain = confirm('Play Again? 🎮');
            playAgain ? location.reload() : alert('Thanks for playing. ❤️')

        } else {
            alert('You didn\'t enter rock/paper/scissors. ❌')
        }
    } else {
        alert ('I guess you changed yout mind. Maybe next time. 👋');
    }
} else {
    alert ('OK, maybe next time. 👋');
} */

// Loops
/* let myNum = 1;
while (myNum <= 50) {
    console.log(myNum);
    myNum++;
}
//or
let myNum1 = 0;
while(myNum1 < 50) {
    myNum1++;
    console.log(myNum1);
} */

/* let myNum2 = 0;
do {
    myNum2 += 1;
    console.log(myNum2);
} while (myNum2 < 50) */

/* for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//or
let j = 1;
for(; j <= 10 ;) {
    console.log(j);
    j++;
}

let myName = 'Jana';
for (let i=0; i < myName.length; i++) {
    console.log(myName.charAt(i));
} */
/* let name = 'Jane';
let counter = 0;
let myLetter;
while(counter <= 3) {
    myLetter = name[counter];
    console.log(myLetter);
    if(counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === 'n') break;
    counter++;
}
console.log(counter); */

// Funtions / Methods = built-in function - like .toLowerCase(), .random()

/* function sum(num1, num2) {
    // console.log(num1, num2);
    if (num2 === undefined) {
        return num1 + num1
    }
    return num1 + num2
}
console.log(sum(2)); */

/* function getUsernameFromEmail(email) {
    return email.slice(0, email.indexOf('@'))
}
console.log(getUsernameFromEmail('eziojana13@gmail.com')); */

/* const getUsernameFromEmail = function (email) {
    return email.slice(0, email.indexOf('@'))
}
console.log(getUsernameFromEmail('ssjana.4@gmail.com')); */

/* const getUsernameFromEmail = (email) => {
    return email.slice(0, email.indexOf('@'))
}
console.log(getUsernameFromEmail('ssjana.4@gmail.com')); */

/* const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}
console.log(toProperCase('jAnArThThAn')); */

// var, let, const

/* var i = 1
var i = 2
console.log(i);

// Global scope
var x = 1;
let y = 2;
const z = 3;

// Local scope - block
{
    let y = 4;
    // console.log(y);

}

// Local scope - function
function myFunc() {
    const z = 5;
    console.log(z);

}
// console.log(y);
myFunc()

function myFunc() {
    const z = 5;
    console.log(y);

    {
        let y = 4;
        console.log(y);
    }
} */

/* var x = 1;
let y =  2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
    var x = 10; //function scope
    const z = 5; //block scope
    
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    {
        var x = 11;
        const z = 6;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
myFunc() */

// Arrays DS
/* const myArr = [];

myArr[0] = 'Javascript';
myArr[1] = 101;
myArr[2] = true;
myArr.push(11.13)

console.log(myArr);
console.log(myArr.length);
console.log(myArr[1]);
console.log(myArr[myArr.length - 1]);

myArr.pop()
console.log(myArr);

myArr.unshift('Java')
console.log(myArr);
console.log(myArr.shift());
console.log(myArr);

// delete myArr[1]
myArr.splice(1,1, 102)
console.log(myArr);
console.log(myArr[1]); */

/* const myArr1 = ['A', 'B', 'C'];
const myArr2 = ['D', 'E', 'F'];

// const newArr = myArr1.slice(2, 5)
// console.log(newArr);
// myArr1.reverse()
console.log(myArr1);
const newStr = myArr1.join();
console.log(newStr);
const newArr = newStr.split(',');
console.log(newArr);
const newArr = myArr2.concat(myArr1)
console.log(newArr);

const newArr1 = [...myArr1, ...myArr2] // spread operator
console.log(newArr1); */


/* const gadgetShelfA = ['RAM', 'CPU', 'HDD']
const gadgetShelfB = ['MOBO', 'Case', 'GPU']

const gameShelfA = ['AC', 'FC', 'R6']
const gameShelfB = ['COD', 'BF', 'MoH']

console.log(gadgetShelfA[1]);
console.log(gameShelfB[2]);

const gadgetDept = [gadgetShelfA, gadgetShelfB]
const gameDept = [gameShelfA, gameShelfB]

console.log(gadgetDept[0][1]);
console.log(gameDept[1][2]);

const computerStore = [gadgetDept, gameDept]
console.log(computerStore);

console.log(computerStore[0][0][1]);
console.log(computerStore[1][1][2]); */

// Objects - key-value pair in curly braces

/* const myObj = 
{
    name: 'Jana',
    alive: true,
    age: 23,
    hobbies: ['Eat', 'Sleep', 'Code'],
    beverages: {
        morning: 'Tea',
        evening: 'Coffee'
    },
    action: function() {
        return `Time for ${this.beverages.evening}`
    }
}
console.log(myObj.name);
console.log(myObj.hobbies[1]);
console.log(myObj.beverages.evening);
console.log(myObj.action()); */

/* const vehicle = {
    wheels: 4,
    engine: function() {
        return 'Vrooooom!'
    }
}
const truck = Object.create(vehicle) //Constructor
truck.doors = 2

console.log(truck.doors);
console.log(truck.wheels); //Inheritance
console.log(truck.engine());

const car = Object.create(vehicle)
car.doors = 4
car.engine = function() { return 'Whoooosh!'} //Override

console.log(car);
console.log(car.wheels);
console.log(car.doors);
console.log(car.engine());

const tesla = Object.create(car)
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function() { return 'Sssssssssh!' }
console.log(tesla.engine()); */

/* const movie = {
    nolan: 'Inception',
    tarantino: 'Kill Bill',
    fincher: 'Se7en',
    scorsese: 'Shutter Island'
} */

/* delete movie.scorsese
console.log(movie.hasOwnProperty('scorsese'));

console.log(Object.keys(movie));
console.log(Object.values(movie));

//       key/id
for (let item in movie) {
    console.log(`On ${item}, It's ${movie[item]}`);
} */

//destructuring objects
/* const {nolan, tarantino:  myFavMovie, fincher, scorsese} = movie
console.log(nolan);
console.log(fincher);
console.log(myFavMovie); */

/* function goesTo ({fincher}) {
    return `Award goes to ${fincher}!`
}
console.log(goesTo(movie)); */

// Classes -- until ES6 in 2015

/* class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType
        this.size = pizzaSize
        this.crust = 'original'
        this.toppings = []
    }

    getCrust() {
        return this.crust
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }

    getToppings() {
        return this.toppings
    }

    setToppings(topping) {
        this.toppings.push(topping)
    }
    bake() {
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}
const myPizza = new Pizza('pepperoni', 'small')
// myPizza.type = 'supreme'
myPizza.setCrust('thin')
myPizza.getCrust()
myPizza.bake()

myPizza.setToppings('sausage')
myPizza.setToppings('olives')

console.log(myPizza.getToppings()); */

/* class Pizza {
    constructor(pizzaSize) {
        this.size = pizzaSize
        this.crust = 'original'
    }

    getCrust() {
        return this.crust
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize)
        this.type = 'The Works'
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}

const mySpcialty = new SpecialtyPizza('medium')
mySpcialty.slice()
console.log(mySpcialty.type);
console.log(mySpcialty.size); */

// Factory function
/* function pizzaFactory(pizzaSize) {
    const crust = 'original'
    const size = pizzaSize
    return {
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
    }
}

const myPizza = pizzaFactory('small')
myPizza.bake() */

/* class Pizza {
    crust = 'original' //public
    #sauce = 'traditional' //private
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize
    }

    getCrust() {
        return this.crust
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust
    }
    hereYouGo() {
        console.log(
            `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
        );
    }
}

const myPizza = new Pizza('large')
myPizza.hereYouGo()
console.log(myPizza.getCrust()); */

// JSON - JavaScript Object Notation - used to send and receive data in many language not just in JS. text format that is completely language independent

/* const myObj = {
    name: 'Jana',
    hobbies: ['eat', 'sleep', 'code'],
    hello: function() {
        console.log('Hello!');
    }
};

console.log(myObj);
console.log(myObj.hobbies);
console.log(myObj.name);
myObj.hello()
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON);
console.log(typeof receiveJSON);
console.log(receiveJSON.name); */

// Errors and Error handling

// 'use strict';
/* variable = 'Jana'; Reference error
const variable = 'Jana'; */

//Object..create() Syntax error

/* const name = 'Jana'
name = 'Joe' Type error */

/* const makeError = () => {
    let i = 1;
    while (i <= 5) {
        try {
            // const name = 'Jana';
            // name = 'Joe'
            // throw new Error('This is a error')
            if(i % 2 !== 0) {
                throw new Error('Odd number!');
            }
            console.log('Even number!');
        } catch (err) {
            // console.log(err);
            // console.error(err.name);
            // console.error(err.message);
            console.error(err.stack); // .name / .message
            // console.warn(err);
            // console.table(err);
        } finally {
            console.log('...finally');
            i++;
        }
    } 
}
makeError(); */

/* function customError(message) {
    this.message = message
    this.name = 'customError'
    this.stack = `${this.name}: ${this.message}`
} */

// DOM - Document Object Model

/* const box5 = document.getElementById('box5')
const box8 = document.querySelector('#box8')

box5.style.backgroundColor = 'dodgerblue'

const root = document.getElementById('root')

const section1 = document.getElementsByClassName('section1')
const sameSection1 = document.querySelector('.section1')

console.log(section1);
console.log(sameSection1);

// root.style.display = 'none'

const divs = root.querySelectorAll('div')
console.log(divs);

const sameDivs = root.getElementsByTagName('div')
console.log(sameDivs);

const evenDivs = root.querySelectorAll('div:nth-of-type(2n)')
console.log(evenDivs);

for (let i=0; i< evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = 'limegreen'
    evenDivs[i].style.width = '150px'
}

const navText = document.querySelector('nav h1')
console.log(navText);
navText.textContent = 'H 3 L L 0 W 0 R L D !'

const navbar = document.querySelector('nav')
navbar.innerHTML = '<h1>Hello</h1> <p>This should align right</p>'
console.log(navbar);
console.log(navText);
navbar.style.justifyContent = 'space-around'

console.log(evenDivs[0].parentElement.children);

const section2 = document.querySelector('.section2')

while(box5.lastChild) {
    box5.lastChild.remove()
}
while(section2.lastChild) {
    section2.lastChild.remove()
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement('div')
    newDiv.textContent = iter

    newDiv.style.backgroundColor = 'blueviolet'
    newDiv.style.width = '100px'
    newDiv.style.height = '100px'
    newDiv.style.margin = '.5em'
    newDiv.style.display = 'flex'
    newDiv.style.alignItems = 'center'
    newDiv.style.justifyContent = 'center'
    parent.append(newDiv)
}

for (let i = 1; i <= 12; i++) {
    createDivs(section2, i)
} */

// Event Listeners

// addEventListener(event, function, useCapture)

/* const view = document.querySelector('#view2')
const div = view.querySelector('div')
const h2 = div.querySelector('h2')

const doSomething = () => {
    alert('doing something')
}

h2.addEventListener('click', doSomething, false)
h2.removeEventListener('click', doSomething, false)

h2.addEventListener('click', function(event) {
    console.log(event.target);
    event.target.textContent = 'Clicked'
}) */

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        console.log('readyState: complete');
    }
    initApp()
})

// event bubbling
// false bottom-top/ true-top-bottom
const initApp = () => {
    const view = document.querySelector('#view2')
    const div = view.querySelector('div')
    const h2 = div.querySelector('h2')

    view.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'gold'
    }, false)

    div.addEventListener('click', (event) => {
        // event.stopPropagation()
        event.target.style.backgroundColor = 'tomato'
    }, false)

    h2.addEventListener('click', (event) => {
        event.target.textContent = 'Clicked'
    }, false)
}