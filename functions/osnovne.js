//funkcije bez parametra i vrecene vrednosti.
function sayHi() {
    alert("cao");
}
//funkcije nije dovoljno napraviti nego treba ih i pozvati
//za funkciju bez parametra i vracene vrednosti se to radi ovako:
sayHi();

//promenljive koje definisemo u funkcijama, ne mozemo pristupiti van funkcija 
function sayHi1() {
    let c = "cao";
    alert(c);
}

//funkcija moze da prima podatke van funkcije preko parametara, tako sto ih
//upisemo u zagradu
function sayHi(poruka) {
    alert(poruka);
}
//kad ga pozovemo damo mu informaciju u zagradu
//on to ucita u promenljivu(u ovom slucaju poruka)
//i iskoristi tu promenljivu.
sayHi("cao kako si")


//funkcije osim ispisa mogu da vrate vrednost van funkcije
//to se moze dostici sa komandom return.
//ovde upisemo dva parametra a i b
//i vracamo njihov zbir;
function sum(a, b) {
    return a + b
}

//kad pozivamo funkcije koje imaju povratnu vrednost, to radimo na sledeci nacin

let s = sum(5, 6);
alert(s);

//ili
alert(sum(5, 6));

//funkcija koja proverava da li broj koji unesemo kao parametar je prost ili nije
//kad je prost vraca true, kad nije vraca false
function isPrime(num) {
    //specijalni slucajevi su 0,1,2 brojevi koje nas algoritam ne gleda ali nisu prosti
    //zato ih gledamo odvojeno na pocetku
    //ako naidjemo na ove brojeve vracamo false i ne idemo dalje
    if (num == 0 || num == 1 || num == 2) {
        return false; //return se ponasa i kao break u petljama,
    }                 //kad naidjemo na prvi return funkcija se zavrsava i vraca tu vrednost ne ide napred


    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false; //ako naidjemo na jedan broj skojim je deljiv od 2-num onda nije prost pa vracamo false.
    }
    //ako prodje ceo program bez toga da nadjemo neki broj sa kojim je nas broj deljiv
    //onda nas broj jeste prost pa vracamo true;
    return true;
}


//program izgenerise sve proste brojeve od starta do stopa
function generatePrime(start, stop) {
    for (let i = start; i <= stop; i++) {
        //ako je nas broj prost onda ga ispisemo ako nije idemo dalje
        if (isPrime(i)) console.log(i); //ovde iskoristimo prethodno napravljenu funkciju isPrime
    }
}


//izgenerisemo brojeve od 100 do 200
//generatePrime(100,200); 



function obrni(num) {
    let reversed = 0; //obrnut broj sa pocetnom vrednoscu 0
    let r; //ostatak

    //sve dok nas broj ne bude 0 radi:
    while (num != 0) {
        let r = num % 10; //izracunam ostatak kad podelim sa 10
        //sto znaci da cu izolirati prvi cifru
        reversed = reversed * 10 + r;//pomerim brojeve za jednu decimalu u levo i dodam ostatak    
        num = Math.floor(num / 10); // podelim i zaokruzim na dole (odbacim prvu cifru)
    }

    return reversed;
}

//alert(obrni(1234));

//ostale funkcije vi napravite sami
