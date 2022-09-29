let input = Number(prompt("upisi broj"));
let isPrime = true;

for(let i = 2; i<input; i++){
    if(input%i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime == true) console.log("broj je prost");
else console.log("broj nije prost")