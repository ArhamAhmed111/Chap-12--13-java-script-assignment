//Question 1

// function checkcharactortype(char) {
//     if (!isNaN (parseInt(char))) {
//         alert(`${char} is a Number`)
//     }
//     else if (char >= "A" && char <= "Z") {
//         alert(`${char} is an Upper case letter`)
//     }
//     else if (char >= "a" && char <= "z") {
//         alert(`${char} is an Lower case letter`)
//     }
//     else{
//         alert(`${char} is not a Num or nor String`)
//     }
// }
// var userGivenChar = prompt("Enter a charactor (i.e, string or num)")
// checkcharactortype(userGivenChar);


//Question 2

// var firstInteger = parseInt(prompt("Enter the first integer"));

// var secondInteger = parseInt(prompt("Enter the second integer"));

// if( firstInteger > secondInteger) {
//     alert(`The Larger Integer is ${firstInteger}`);
// }
// else if ( secondInteger > firstInteger) {
//     alert(`The Larger Integer is ${secondInteger}`);
// }
// else {
//     alert("Both Integer is equal");
// }




//Question 3

// var userGivenData = +prompt("Enter a num");

// if (isNaN(Number)) {
//     alert("Please enter a Number")
// }
// else {

// if (userGivenData < 0) {
//     alert("The num you enter is Negative")
// }
// if (userGivenData === 0) {
//     alert("The num you enter is Zero")
// }
// if (userGivenData > 0) {
//     alert("The num you enter is Positive")
// }

// }

//Question 5


// var password ="2005"

// var userGivenPass = prompt("Enter your password")


// if (userGivenPass === "" ) {
//     alert("Please enter the password")
// }
// else {
// var confirmationOfPass = prompt("Confirm your password")
// if (userGivenPass != confirmationOfPass) {
//     alert("Please enter the same password")
//     var userGivenPass = prompt("Enter your password")
//     var confirmationOfPass = prompt("Confirm your password")

// }
// else{
//     alert("Both Password are same")
// }
// var correctPass = userGivenPass = confirmationOfPass
//  if (correctPass === password) {
//     alert("Correct Password")
// }
// else{
//     alert("Incorrect Password")
// }

//Question 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert(greeting = "Good Day")
// }
// else {
//    alert(greeting = "Good Evening")
// }

//Question 4


var userChar = prompt("Enter your Charactor i.e. String");
var charIntoLowerCase = userChar.toLowerCase();

if (userChar === "a" || userChar === "e" || userChar === "i" || userChar === "o" || userChar === "u") {
    alert("True");
}
else{
    alert("False");
}