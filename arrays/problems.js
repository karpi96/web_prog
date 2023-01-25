let array = [1, 6, 8, 2, 4, 5];

//1. suma svakog elementa u nizu

let sum = 0;
for (e of array) {
    sum += e;
}

console.log("suma svakog elementa: " + sum);

//2. prosek svakog elementa u nizu

let avrage = sum / array.length;

//3. proveri da li niz sadrzi unet broj i koliko puta

let input = Number(prompt("enter a number: "));

let inArray = false;
let counter = 0;
for (e of array) {
    if (e == input) {
        inArray = true;
        counter++;
    }
}

//4. potrazi najveci i najmanji broj u nizu

let max = array[0];
let min = array[0];

for (e in array) {
    if (e > max) max = e;
    if (e < min) min = e;
}

//5. potrazi drugi najveci broj u nizu

let max1 = array[0];
let min1 = array[0];

for (e in array) {
    if (e > max1) max1 = e;
    if (e < min1) min1 = e;
}

let secondMax = min;

for (e in array) {
    if (e > secondMax && e < max) {
        secondMax = e;
    }
}

//6. izvuci iz niza parne brojeve i stavi ih u novi niz

let evenArray = []

for (e of array) {
    if (e % 2 == 0) {
        evenArray.push(e);
    }
}

//7. izracunaj koliko parnih brojeva je u nizu

let evenCounter = 0;

for (e of array) {
    if (e % 2 == 0) {
        evenCounter++;
    }
}

//funkcija

let countEvenNumbers = function (array) {
    let evenCounter = 0;

    for (e of array) {
        if (e % 2 == 0) {
            evenCounter++;
        }
    }

    return evenCounter;
}

//8. Obrni niz

for (let i = 0; i < array.length / 2; i++) {
    let help = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = help;
}

//funkcija i drugi nacin

let reverse = function (array) {
    ans = []

    for (let i = array.length - 1; i >= 0; i--) {
        ans.push(array[i])
    }

    return ans;
}

//9. Proveri da li su dva niza jednaka

array2 = [2, 6, 8, 2, 3];
let equal = true;
for (let i = 0; i < array.length; i++) {
    if (array2[i] != array[i]) {
        equal = false;
        break;
    }
}

//ili u funkciji


let isEqual = function (array1, array2) {
    for (let i = 0; i < array.length; i++) {
        if (array2[i] != array1[i]) {
            return false
        }
    }
    return true;
}

//neke zadatke imate i na leetcode-u