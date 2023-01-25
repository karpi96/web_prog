let emptyArray = []; //prazan niz

//niz sa elementima
//svaki element niza ima svoj redni broj 

//           0,1,2,3,4
let array = [1,5,7,8,10] 

//te brojeve mozemo da iskoristimo da pristupimo elementima niza

// u ovom slucaju ispisace element koji se nalazi na 2. mestu
console.log(array[2])  // 7

//duzini niza mozemo da pristpupimo na sledeci nacin
console.log(array.length) 

//proci kroz svaki element se radi:

for(let i = 0; i<array.length; i++){
    //radimo nesto sa array[i]
    console.log(array[i]);
}

//ili alternativno 
//svaki element iz niza array cita se u promenljivu element red po red
for(element of array){
    console.log(element)
}

//dodavanje na kraj ovog niza mozemo da radimo na sledeci nacin

array[5] = 23;

//ali u ovom slucaju treba da znamo koji je zadnji index
//zato imamo metodu push, koja gura novi element uvek na kraj

array.push(25);

