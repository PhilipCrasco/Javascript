
/*

 let age  = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age); // to convert ist to Number 
age += 1; // Use for incrementation
console.log("Happy BirthDday! You Are" , age , "years old")

*/


/* 
   //Conversion

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza"); // Type Conversion
12

console.log(x, typeof x); // Type use for checking what is the dataType
console.log(y, typeof y);
console.log(z, typeof z);


*/


/* 

// Const = a variable that cant be changed    

const PI = 3.14159;
let radious;
let circumference; 

radious = window.prompt("Enter the radious of a circle");
radious = Number(radious)

circumference = 2* PI * radious;
console.log("The circumference is:" , circumference);

*/

/*

// Math = use for math value 

let x = 3.14;
let y = 5;
let z = 9

let minimun;
let maximum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x);
x = Math.PI;

maximum = Math.max(x,y,z);
minimun = Math.min(x,y,z);


console.log(x);

*/




// Hypotenose cal = geting the triangle equation using mathematical equation of algebra


document.getElementById("SubmitButton").onclick = function()
{
   let a = document.getElementById("aTextBox").value;
    a = Number(a);

 let b = document.getElementById("bTextBox").value;
    b = Number(b);

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;

}

let count = 0;

document.getElementById("decreaseBtn").onclick = function()
{
  count -=1
  document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function()
{
  count = 0;
  document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function()
{
 count += 1;
 document.getElementById("countlabel").innerHTML = count;
//sssss
}
