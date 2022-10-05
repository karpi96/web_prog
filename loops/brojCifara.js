//izracunaj koliko cifara sadrzi neki broj


let input = Number(prompt("upisi broj")); // unos
let brojCifara = 0; //promenljiva koji ce da broji cifre
//dok je input vece od 0 radi:
while(input>0){    
    input = Math.floor(input/10); // podelimo sa deset i zaokruzimo na dole
    brojCifara++; //dodaj jedan svaki put kad odbacimo jednu cifru
}

console.log(brojCifara); //ispis rezultata