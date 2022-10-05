//da li je broj palindrom(simetrican)?

let input = Number(prompt("unesi broj da obrnes: "));
let reversed = 0; //obrnut broj sa pocetnom vrednoscu 0
let num = input; // sacuvamo nas unos u neku drugu promenljivo da ne izgubimo unetu vrednost
let r; //ostatak

//obrnem broj
while (num != 0){//sve dok nas broj ne bude 0 radi:
    let r = num % 10; //izracunam ostatak kad podelim sa 10
                      //sto znaci da cu izolirati prvi cifru
    reversed = reversed * 10 + r;//pomerim brojeve za jednu decimalu u levo i dodam ostatak    
    num =Math.floor(num/10); // podelim i zaokruzim na dole (odbacim prvu cifru)
}


//ako je unos jednak sa obrnutim brojem onda je palindrom
if (input == reversed)
    console.log("Broj " +input + " je palindrom");
else
    console.log("Broj " +input + " je palindrom");

