
//objekat je skup informacija koju gledamo kao jednu celinu
//objekat se pravi na sledeci nacin:
let user = {
    name: "Roki", //atribut ili osobina objekta
    email: "roki@gmail.com"
}
//informacijama koje se nalaze u atributima objekta, mozemo da pristupimo na sledeca dva nacina
console.log(user.name); 
console.log(user["name"]);

//naknadno dodavanje atributa u objekat
user.age = 25;
//brisanje atributa iz objekta
delete user.email;
//ispisanje celog objekta u konzoli
console.log(user);


//citanje svih atributa iz objekta
for(let key in user){
    console.log(key + ": "  + user["key"]);
}

//kopiranje objekta
let copy = {};
Object.assign(copy,user);
console.log(copy);




