let myArray = ["Charlie", "Sue", "Theta", "Agnes"];
myArray[2] = ["Grinch"];
let myNewArray = myArray;
console.log(myNewArray);

function bananas(array) {
    array.push('Jimmy', 'Tyrone', 'Alex', 'Linda')
    array.unshift('Agatha', 'Belinda', 'Samantha')
    return myNewArray
}
console.log(bananas(myNewArray));

// function mixedNumbers(arr) {
//     // Only change code below this line
//   arr.unshift('I', 2, 'three')
//   arr.push(7, 'VIII', 9)
//     // Only change code above this line
//     return arr;
//   }
  
//   console.log(mixedNumbers(['IV', 5, 'six']));