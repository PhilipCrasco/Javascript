/* Variables


 let FirstName = "Bro";
let Age = 21;
let student = true

console.log("hello ",FirstName);
console.log("You are", Age , "years old");
console.log("Enrolled: ",student);


document.getElementById("p1").innerHTML = "hello " + FirstName;
document.getElementById("p2").innerHTML = "You are " + Age;
document.getElementById("p3").innerHTML = "Enrolled: " + student;

*/



/*

 Operator Presedence 
{
    1. parenthesis ()
    2.Exponents 
    3. multiple and division
    4 . Addition and subtraction
}
*/

/* Window Promt

let username = window.prompt("what your name?");
console.log(username);

*/

let username;

document.getElementById("myButton").onclick = function()
{    
username  = document.getElementById("myText").value;
console.log(username);
document.getElementById("myLabel").innerHTML = "Hello Niggas " + username;
}




