let isPrime;
let max = Number(prompt("upisi maximum"));

for(let i = 3; i<=max; i++)
    isPrime = true;

    for(let j = 2; j<i; j++){
        if(i%j == 0){
            isPrime = false;
            break;
    }

    if(isPrime == true) console.log(i);
}

