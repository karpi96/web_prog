//sumiraj sve brojeve od 1 do nekog unetog broja

let length = Number(prompt("unesi do kojeg broja pravimo sumu"));

let sum = 0;//pocetna vrednost sume je 0 pa na to dodajemo sve ostalo
for(let i = 1; i<=length; i++){//generisemo brojeve od 1 do unetog broja
    sum+=i; //dodamo ih na sumu
}

console.log(sum);//ispisemo sumu

