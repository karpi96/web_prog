//Napravi 2d map objekat uz pomoc konstruktora
//Treba da ima dva atributa, koordinate x i y
//Treba da ima 5 funkcija: idi gore,dole,levo,desno i ispisi koordinate

function Map(){
    this.x = 0;
    this.y = 0;

    this.goUp = function(){
        this.y++;
    }

    this.goDown = function(){
        this.y--;
    }

    this.goLeft = function(){
        this.x--;
    }

    this.goRight = function(){
        this.x++;
    }

    this.printPosition = function(){
        console.log("your posiiton on the map is:   x: " + this.x + "  y: " + this.y)
    }
}

let map = new Map();

map.goRight();
map.goUp();
map.goUp();

map.printPosition();