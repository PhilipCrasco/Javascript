
/*

// String Properties

let username = "niggas";
let PhoneNumber = "123-456-7890"

//console.log(username.length);
///console.log(username.charAt(0));
//console.log(username.indexOf("o"));
//console.log(username.lastIndexOf("0"));

//username = username.trim();

//username = username.toUpperCasse();
//username = username.toLowerCase();

PhoneNumber = PhoneNumber.replaceAll("-", ""); // replace the set data 

console.log(PhoneNumber);

*/


// String Slice

let fullName = "Philip Crasco";
let firstName;
let lastName;

firstName = fullName.slice(0 , fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);


