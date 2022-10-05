//ispisi fibonacijev niz do neke unete duzine

let n1 = 0; //prvi broj
let n2 = 1; //drugi broj
let next; //broj de cemo da sacuvamo zbir prva dva broja
let length = Number(prompt("unesi duzinu fibonacievog niza")); //unos
console.log("fibonacciev niz " + length + " duzine.");

for(let i = 1; i<=length; i++){ //generisemo brojevem od 1 do unetog broja
    console.log(n1); //ispisemo prvi broj
    next = n1 + n2; // izracunamo sledeci broj tako sto sabiramo prva dva broja
    n1 = n2; 
    n2 = next; //pomerimo brojeve za jedno mesto
}