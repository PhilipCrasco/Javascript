

/*
// IF Function = basic form of descision making

let age = 0 ;

if (age >= 18 )
{
    console.log("You are an adult!");

}
else if(age <= 0 )
{
    console.log("You haven't been born yet!");

}
else if(age >= 65 )
{
    console.log("You you are a senior citizen!");
    
}
else
{
    console.log("You are a child!");
}
*/

/*
document.getElementById("SubmitButton").onclick = function()
{
  
    const box = document.getElementById("myCheckBox")

    if(box.checked)
    {
        console.log("checked");
    }
    else
    {
        console.log("unchecked");
    }

}

*/



document.getElementById("radioSubmit").onclick = function()
{
    const box = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterBtn = document.getElementById("masterBtn");
    const  PayPalBtn = document.getElementById("PayPalBtn");


    if(box.checked)
    {
        console.log("checked");
    }
    else
    {
        console.log("unchecked");
    }


    if(visaBtn.checked)
    {
        console.log("visa");
    }
    else if ((PayPalBtn.checked))
     {
    console.log("Paypal");   
    } 

    else if(masterBtn.checked)
     {
        console.log("mastercard");   
    }
    else
    {
        console.log("null");   
    }

}