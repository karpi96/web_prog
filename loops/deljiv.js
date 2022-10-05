//ispisati sve brojeve od 1 do 100 koji su deljivi sa unetim brojem

let input = Number(prompt("upisi broj")); //unos 

for(let i = 1; i<=100; i++){ //brojanje od 1-100
    if(i%input == 0) console.log(i); //proveri da li je broj koji generise petlja deljiv sa unetim brojem
}