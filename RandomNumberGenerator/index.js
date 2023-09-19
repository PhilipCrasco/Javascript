


document.getElementById("rollbutton").onclick = function()
{

let x = Math.floor(Math.random() * 45) + 1;
let y = Math.floor(Math.random() * 45) + 1;
let z = Math.floor(Math.random() * 45) + 1;

document.getElementById("xlabel").innerHTML = x;
document.getElementById("ylabel").innerHTML = y;
document.getElementById("zlabel").innerHTML = z;

}