let n1 = 0;
let n2 = 1;
let next;
let length = Number(prompt("unesi duzinu fibonacievog niza"));
console.log("fibonacciev niz " + length + " duzine.")

for(let i = 1; i<=length; i++){
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
}