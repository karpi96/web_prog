let bodovi = Number(prompt("unesi broj bodova: "));

if(bodovi < 0 || bodovi>100 || isNaN(bodovi)) 
    console.log("uneti podatak je neispravan");
else if(bodovi <= 40) console.log("dobio si 1");
else if(bodovi <= 55) console.log("dobio si 2");
else if(bodovi <= 70) console.log("dobio si 3");
else if(bodovi <= 85) console.log("dobio si 4");
else if(bodovi <= 100) console.log("dobio si 5");
