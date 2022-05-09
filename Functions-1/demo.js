let jonSnowHealth = 100

let textVersion = jonSnowHealth.toString()

console.log(jonSnowHealth)
console.log(textVersion)

let boolVersion = Boolean(jonSnowHealth); 
let theWinnerIs = "Jamie is the winner.";  
let newWinner = theWinnerIs.replace("Jamie", "Jon"); 

console.log(theWinnerIs); 
console.log(newWinner); 

// if (newWinner.includes("Jon")) {
//     console.log("replaced Jamie with Jon inside of newWinner variable")
// } else {
//     console.log("does not include given text")
// }

// console.log("newWinner variable: ", newWinner)

// console.log({ newWinner })

// let newWinnerLover = newWinner.toLowerCase(); 

// console.log({ newWinnerLover }); 

// var words = newWinnerLover.split(" "); 
// console.log({ words })

// let newWinnerKebab = words.join("-")
// console.log({ newWinnerKebab })

// default is a comma if you put nothing in between. Join fills in the blanks between the words.

function isJonAlive() {
    if (jonSnowHealth > 0) {
        console.log('jon snow lives with a helth level of ${ jonSnowHealth }!')
    } else {
        console.log("Rip jon snow")
    }
}

isJonAlive()

// best practice when using arrow functions is to always use const instead of var or let

function supriseAttack(damage) {
    jonSnowHealth -= damage
    isJonAlive()
}

supriseAttack(20)

supriseAttack(12)

supriseAttack(6)

isJonAlive()

function greeting(person1, person2) {
    console.log( `${person1} and ${person2} say hello to each other`)
}

// create a function called rollDice
// this function takes no parameters
// make that function when called create a variable called possibleRolls and set it to the value of an array
// Next, in the function, create a variable called “randomRoll” and set it to a string with the value of “placeholder”
// In the function, return possibleRoles[randomNumber]
function rollDice() {
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomRoll = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomRoll]
}

let firstRoll = rollDice()
let secondRoll = rollDice()

// console.log(firstRoll, secondRoll)

function diceMultiplier() {
   let firstRoll = rollDice();
    let secondRoll = rollDice(); 
    
    return firstRoll * secondRoll; 
}

// console.log(firstRoll * secondRoll)

let resultNumber = diceMultiplier(); 

console.log(resultNumber)

// if there is no return in the function then the invocation will have no value and it will post undefined in the terminal 


