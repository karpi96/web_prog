let ladder = {
    position: 0,
    goUp: function(){
        this.position++;
    },
    goDown: function(){
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


