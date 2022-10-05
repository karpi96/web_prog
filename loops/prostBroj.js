//proveri da li je unet broj prost

let input = Number(prompt("upisi broj"));
let isPrime = true; //idemo sa pretpostavkom da je broj prost

for(let i = 2; i<input; i++){//generisemo brojeve od 2 do broja koju smo uneli
    if(input%i == 0){ //gledamo da li je deljiv sa nekim brojem
        isPrime = false; //ako jeste onda promenimo promenljivu jer broj nije prost
        break; //zavrsimo petlju prevremeno
    }
}

if(isPrime == true) console.log("broj je prost");
else console.log("broj nije prost")