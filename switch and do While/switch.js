//program koji prebaci ocene(brojeve) u reci

let ocena = Number(prompt("unesi ocenu: "))

if(ocena == 5) alert("odlican");
else if(ocena == 4) alert("vrlo dobar");
else if(ocena == 3) alert("dobar");
else if(ocena == 2) alert("dovoljan");
else if(ocena == 1) alert("nedovoljan");
else alert("los unos")

//ekvivaletno ovom kodu umesto if-a mozemo koristiti komandu switch case
//ovo kiristimo samo kad imamo == znakove u ifovima, sto zanaci da imamo specificne "slucajeve"(case)
switch(ocena){
    case 5:
        alert("odlican");
        break;
    case 4:
        alert("vrlo dobar");
        break;
    case 3:
        alert("dobar");
        break;
    case 2: 
        alert("dovoljan");
        break;
    case 1:
        alert("nedovoljan");
        break;
    default:
        alert("los unos");
}

