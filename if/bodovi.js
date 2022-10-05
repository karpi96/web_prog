/* 
Unesi broj bodova i pretvori u ocene
*/
let bodovi = Number(prompt("unesi broj bodova: ")); // unos

if(bodovi < 0 || bodovi>100 || isNaN(bodovi)) //ako su uneti bodovi van granica ili nisu brojevi
    console.log("uneti podatak je neispravan");
else if(bodovi <= 40) console.log("dobio si 1");//ako je manje ili jednako od 40 onda 1
else if(bodovi <= 55) console.log("dobio si 2");//ako je manje ili jednako od 55 onda 2
else if(bodovi <= 70) console.log("dobio si 3");//ako je manje ili jednako od 70 onda 3
else if(bodovi <= 85) console.log("dobio si 4");//ako je manje ili jednako od 85 onda 4
else if(bodovi <= 100) console.log("dobio si 5");//ako je manje ili jednako od 100 onda 5
