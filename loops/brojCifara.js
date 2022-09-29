let input = Number(prompt("upisi broj"));
let brojCifara = 0;
while(input>0){    
    input = Math.floor(input/10);
    brojCifara++;
}

console.log(brojCifara);