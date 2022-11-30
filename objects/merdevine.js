//napravi merdevine sa regularnom {} sintaksom
//ima jedan atribut koji sadrzi trenutnu poziciju
//ima 3 metode, jedna da ide gore, jedna dole, i jedna da ispise informaciju o poziciji


let ladder = {
    position: 0, 
    goUp: function(){
        this.position++; //this.position = this.position + 1;
    },
    goDown: function(){
        //ne mozemo ici dole sa nulte pozicije pa ako pokusamo ispisace da ne moze
        if(this.position > 0) this.position--;
        else console.log("can't go lower");
    },

    printPosition: function(){
        console.log("your position on the ladder is: "  + this.position);
    },
}

ladder.goUp();
ladder.goUp();
ladder.printPosition();


