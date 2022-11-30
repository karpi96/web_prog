//metode su funkcije koje se nalaze u objektu
let user = {
    name: "Roki",
    email: "roki@gmail.com",

    sayHi(){
        alert("hello");
    },

    /* alternativno metode mogu da se definisu i ovako */

    sayHi1: function(){
        alert("hello");
    }
}

//mozemo da ga pozovemo na sledeci nacin
user.sayHi();


//kad u metodi hocemo da koristimo promenljive koje se nalaze u samom objektu moramo da koristimo kljucnu rec "this"
let user1 = {
    name: "Roki",
    email: "roki@gmail.com",

    sayHiTo: function(someone){
        alert(this.name + " says hello to" + someone);
    }
}


user.sayHiTo("Rambo");