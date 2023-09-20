
// While = do the infinite loop of code depends on your condition

/*
let  username = "";

while(username == "" || username == null) 
{
 username = window.prompt("Enter your name?");

}

console.log(username);

*/

// do while = do something before it will loop
/*
let  username ;

do{
    username = window.prompt("Enter your name?");
}while(username == null || username == "");

console.log(" hey niggas " + username)

*/

// for loop = repeat the code depends on the amount you give

/*
for(let i = 10; i > 0 ; i -= 1)
{
    console.log(i);
}

console.log("hey niggas");

*/


// break = break out to the loop
//continue = skip an iteration of loop 

/*
for(let x = 1 ; x <= 24 ; x+= 1)
{
    if(x == 13)
    {
        continue; // continue without 13
        // break; // stop in 12
    }
    console.log(x);12
}
*/
\
// Nested loop = a loop inside a loop

let symbol = window.prompt("Enter symbol to use");
let rows = window.prompt('Enter # of rows');
let column = window.prompt('Enter # of columns');

for(let x = 1 ; x <= rows ; x +=1 )
{
    for(let y = 1 ;  y <= column;  y+=1 )
    {
     
      for(let z = y ; z <=  x ; z+=1)
      {
        document.getElementById("myRectagle").innerHTML += symbol
      }

    }
    
    document.getElementById("myRectagle").innerHTML += "<br>";
}
