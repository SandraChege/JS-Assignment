// example 4
// ******
// *****
// ****
// ***
// **
// *
console.log("Example 4");
for (i = 6; i > 0; i--) { 
    console.log('*'.repeat(i));
}

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
console.log("Example 5");
for (i = 1; i < 6; i++) {
  console.log(" ".repeat(5-i) + "*".repeat(i));
    // console.log("*".repeat(i));
}
for (i = 5; i > 0; i--) {
  console.log(" ".repeat(5-i) + "*".repeat(i));
  // console.log("*".repeat(i));
}

// example 6
//     * 
//    *** 
//   ***** 
//  ******* 
// ********* 
//  *******
//   ***** 
//    *** 
//     * 
console.log("Example 6")
for (i = 1; i < 9; i += 2) {
  // console.log("*".repeat(i));
  const spaces = " ".repeat((9 - i) / 2);
  const stars = "*".repeat(i);
  console.log(spaces + stars);
}
for (i = 9; i > 0; i -= 2) {
  const spaces = " ".repeat((9 - i) / 2);
  const stars = "*".repeat(i);
  console.log(spaces + stars);
  // console.log("*".repeat(i));
}


// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *
console.log("Example 7");
for (i = 7; i > 0; i--) { 
  if(i === 7){
    console.log("*".repeat(7));
  } else {
    console.log(" ".repeat(6) + "*");
  }
}

// example 8
//*******
//*
//*
//*
//*
//*
//*
console.log("Example 8");
for (i = 7; i > 0; i--) {
  console.log("*".repeat(i === 7 ? 7 : 1));
}

//generate six random numbers between 1 and 49
console.log("Generates six random numbers between 1 and 49");
// let x = Math.floor((Math.random() * 49) + 1);
let x = Math.random() * 49;
let randomNumbers = [];

for (let i = 0; i < 6; i++) { 
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 49 + 1);
    randomNumbers.push(randomNumber);
}
console.log(randomNumbers);