/*
Proveri da li je unet broj deljiv sa 3.

*/
let input = Number(prompt("upisi broj"));

if(input % 3 == 0){  // ako podelimo unos sa 3 i ostatak je 0, onda je deljiv, inace nije
    console.log("deljiv je sa 3");
}else{
    console.log("nije deljiv sa 3");
}