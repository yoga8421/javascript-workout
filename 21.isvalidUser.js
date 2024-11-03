let myName1 = "";
let isValidUser1 = (myName1 == "Arul") ? true : false;
console.log(isValidUser1)

let age = 16
let person = (age >= 18) ? "adult" : "child";
console.log(person);

let myName2 = "";
let isValidUser2;
if (myName2 === "sai") {
    isValidUser2 = "yes";
    console.log(isValidUser2)

}
else {
    isValidUser2 = "no";
    console.log(isValidUser2)

}

// ternary operator used
let myName3 = "sai";
let isValidUser3 = (myName3 == "Arul") ? true : false;
console.log(isValidUser3);
let authendication = (isValidUser3 == true) ? "Yes" : "No";
console.log(authendication);



// if condition used


let myName ="arul";
let isValiduser = true;

if((myName==="arul")&&(isValiduser===true)){
    console.log("valid user")
}
else {
    console.log("invalid user")
}