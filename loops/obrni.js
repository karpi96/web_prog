//obrni uneti broj, npr. 1234 ako obrnemo dobijemo 4321

let input = Number(prompt("unesi broj da obrnes: "));
let reversed = 0; //obrnut broj sa pocetnom vrednoscu 0
let num = input; // sacuvamo nas unos u neku drugu promenljivo da ne izgubimo unetu vrednost
let r; //ostatak
 
//sve dok nas broj ne bude 0 radi:
while (num != 0){
    let r = num % 10; //izracunam ostatak kad podelim sa 10
                      //sto znaci da cu izolirati prvi cifru
    reversed = reversed * 10 + r;//pomerim brojeve za jednu decimalu u levo i dodam ostatak    
    num =Math.floor(num/10); // podelim i zaokruzim na dole (odbacim prvu cifru)
}

console.log(reversed);