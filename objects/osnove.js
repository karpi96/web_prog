let user = {
    name: "Roki",
    email: "roki@gmail.com"
}

console.log(user.name);
console.log(user["name"]);

user.age = 25;
delete user.email;
console.log(user);

for(let key in user){
    console.log(key + ": "  + user["key"]);
}

let copy = {};
Object.assign(copy,user);
console.log(copy);




