//kad treba da pravimo vise objekata koja su slicna, pogodnije je koristiti takozvani "Konstruktor"'
//konstruktor je funkcija koju mozemo da iskoristimo da pravimo nove objekte
//mogu da primaju pocetne vrednosti preko parametra

function User(name,email,age){
    //za svaku osobinu i metodu koja ce se naci u buducem objektu moramo da ga definisemo sa this
    //sve sto nije sa this ce biti samo lokalna promenljiva i sluzi samo da nam pomogne oko kalkulacija i prebacivanja informacija
    this.name = name;
    this.email = email;
    this.age = age;

    //mozemo i metode da definisemo na sledeci nacin
    this.sayHiTo = function(someone){
        alert(this.name + " says hello to" + someone);
    };
}

//uvek se pozivaju sa new komandom
//definisali smo da prima tri parametra, koji su nam i pocetni uslovi i to moramo da damo 
let user = new User("Roki","roki@gmail.com",20);


//poziva se na sledeci nacin
user.sayHiTo("Rambo");