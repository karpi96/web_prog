/*
    Proveri da li je broj izmedju 20 i 30 ili van
*/

let broj = Number(prompt("unesi broj: ")); // unos

if(broj > 10 && broj < 20) //da li je izmedju 10 i 20
    console.log("broj je izmedju 10 i 20");
else if(broj <10 || broj > 20) //da li je van 10 i 20
    console.log("broj je van opsega 10 i 20");
else if(broj == 10) //da li je jedanko 10
    console.log("broj je jednako 10");
else if(broj == 20) // da li je jedanko 20
    console.log("broj je jednako 10"); 

