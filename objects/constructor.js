function User(name,email,age){
    this.name = name;
    this.email = email;
    this.age = age;

    this.sayHi = function(someone){
        alert(this.name + " says hello to" + someone);
    };
}

let user = new User("Roki","roki@gmail.com",20);

user.sayHi("Rambo");