let input = Number(prompt("unesi broj: "));
let reversed = 0;
let num = input;
let r;
 

//obrnemo broj i ako je broj jednak sa unetim brojem onda je palindrom. 
while (num != 0)
{
    let r = num % 10; //uzmemo prvu cifru u nizu
    reversed = reversed * 10 + r;  //guramo prvi broj napred 
    num =Math.floor(num/10); //delimo orginalni broj sa 10
}

if (input == reversed)
    console.log("Broj " +input + " je palindrom");
else
    console.log("Broj " +input + " je palindrom");

