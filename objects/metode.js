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




let user1 = {
    name: "Roki",
    email: "roki@gmail.com",

    sayHi1: function(someone){
        alert(this.name + " says hello to" + someone);
    }
}
