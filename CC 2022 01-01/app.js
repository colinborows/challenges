// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]




//PREP recommit test

//PARAMETERS - will it always be integers? are we going to be given any special characters? an empty array ever?


//RETURN - Return a new arr with each value doubled

//EXAMPLES - If we are given [2,3,4], should return [4,6,8]
// If we are given [4,5,6], should return [8,10,12]
// If we are given [2,22], should return [4,6,8]


//PSEUDOCODE - 
//Make a function that takes in an array

//map through array and multiply each element by 2 and return

function doubled(arr){
   return arr.map(e=>e*2)
}
