let unos = Number(prompt("unesi neki broj"));

while (isNaN(unos)) {
    unos = Number(prompt("unesi neki broj"));
}




//ekvivaletno ovom kodu je


let unos;

do {
    unos = Number(prompt("unesi neki broj"));
} while (isNaN(unos));