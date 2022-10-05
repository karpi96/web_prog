//generisi sve proste brojeve do nekog maximuma

let isPrime;
let max = Number(prompt("upisi maximum"));

for(let i = 3; i<=max; i++) // generisi brojeve od 3 do naseg maximuma
    isPrime = true; //ulazimo u pretpostavku da je broj prost 
    //trazimo kontra primer da nije
    for(let j = 2; j<i; j++){//generisemo brojeve od 2 do broja kojeg proveravamo
        if(i%j == 0){//ako nadjemo neki broj skim je deljiv onda on nije prost 
            isPrime = false;
            break; // izlazimo iz petlje prevremeno
    }

    if(isPrime == true) console.log(i); //ako se nasa promenljiva nije promenila onda je ona true pa cu ispisati taj broj
}

