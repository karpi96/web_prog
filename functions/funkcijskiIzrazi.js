//alternativno pisanje funkcija 

//mozemo da gledamo funkcije i kao promenljive sa specialnim vrednostima
let sayHi = function(){
    alert("cao");
}

let sum = function(a,b){
    return a+b;
}

//mogu i da prekopiram funkciju kao i obicnu promenljivu(kao sto je broj i text)
let sum1 = sum;

sum1(); //ovo kad pozovemo, kao da smo pozvali sum() isto ce se desiti

//callback funkcije

let moze = function(){
    alert("mozes uci");
}

let neMoze = function(){
    alert("ne mozes uci");
}

let provera = function(pitanje, da, ne){
    let god = Number(promt(pitanje));

    if(god>=18) da();
    else ne();
}


provera("koliko imas godina", moze, neMoze);
