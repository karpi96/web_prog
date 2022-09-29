let input = Number(prompt("unesi broj da obrnes: "));
let reversed = 0;
let num = input;
let r;
 
// Execute a while loop to reverse
// digits of given number
while (num != 0){
    let r = num % 10;
    reversed = reversed * 10 + r;    
    num =Math.floor(num/10);
}

console.log(reversed);