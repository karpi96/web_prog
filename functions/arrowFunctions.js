//kad imamo funkciju koja sigurno vraca neku vrednost i jednostavna je
//onda koristimo "arrow" funkcije koje podatke posle "strele" vracaju vrednost i bez kljucne reci "return"


/*sledea sum funkcija je ekvilaletna ovoj

let sum = function(a,b){
    return a+b;
}
*/
let sum = (a,b) => a+b;

//neki ostali primeri
let inchToCm = (cm) => cm/2.54;
let cmToInch = (inch) => inch*2.54;
let cmToM = (cm) => cm/100;

