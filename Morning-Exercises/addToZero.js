// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// // Write your solution below:

// for (i = 0; i < array.length; i++) {
//     if(array.length === 0)
//         console.log(True) {
//     else (console.log(false) }
// } 

// console.log('what is going on')

// let array = [28, 43, -12, 30, 4, 0, 12]; 

// // create a variable called 'value', and set t to False 
// let = value = 'false'
// //create a loop that sets our first number to be compared, starting with index 0, then 1, then 2, etc... 
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; i++) {
//         if (i !== j) {
//             if (array[i] + array[j] === 0) {
//                 value = true
//             }
//         }

//     }   
// }
// create an innter loop that sets our second number to be compared, starting with index 0 

// if the outer loop and innter loop DO NOT HAVE matching iterators (they are NOT looking at the same index in the array), don't do anything. 

//if the sum of our first number to be compared and our second number to be compared === 0, change the value of my 'value' variable to be false. 

// outside all loops, console.log the value variable 

//  create a var called "value", and set it to False
let value = "False"
// create a loop that sets our first number to be compared, starting with index 0, then 1, then 2, etc...
for (let i = 0; i < array.length; i++){
// create an inner loop that sets our second number to be compared, starting with index 0

  for (let j = 0 ; j < array.length; j++) {
// if the outer loop and inner loop don't have matching iterators (they are NOT looking at the same index in the array), do something
    if (i !== j) { 
      // if the sum of our first number to be compared and our second number to be compared === 0, change the value of my "value" variable to be false
      if (array[i] + array[j] === 0) {
        value = "True"
      }


    }


  }

}



