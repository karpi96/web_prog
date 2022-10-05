//izracunaj faktorial unetog broja

let input = Number(prompt("koji faktorial treba da se izracuna?"));
let res = 1;//promenljiva gde cemo da sacuvamo rezultat mnozenja
            //pocinje sa jedan zato sto ako bismo stavili 0 i mnozimo uvek bi rezultat bila 0

for(let i = 1; i<=input; i++){ // brojimo od 1 do unetog broja
    res*=i; //res = res * i; mnozimo rezultat sa brojevima koje generise petlja
}

console.log(res);