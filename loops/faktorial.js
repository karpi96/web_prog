let input = Number(prompt("koji faktorial treba da se izracuna?"));
let res = 1;
for(let i = 1; i<=input; i++){
    res*=i; //res = res * i;
}

console.log(res);