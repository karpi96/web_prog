//Napravi proizvod objekte u prodavnici
//posto imamo u prodavnici mnogo proizvoda, zato treba da se radi preko konstruktora
//Treba da ima 4 atributa ime, osnovna cena, trenutna cena i vrednost akcije u procentima
//Treba da ima 4 metode promeni cenu, ispisi cenu, stavi proizvod na akciju za neki procenat i obrisi akciju.


//pocetne vrednosti su ime proizvoda i osnovna cena
function Product(name, price) {
    this.name = name;
    this.basePrice = price;
    this.currentPrice = price;//na pocetku nije na akciji novi proizvod pa i trenutna i osnovna cena su ista
    this.salePercentage = 0; // nije na akciji

    //metoda koja stavlja proizvod na akciju
    //prima kao parametar procenat za koliko cemo da snizimo cenu
    this.sale = function (percentage) {
        this.currentPrice = this.basePrice - this.basePrice / 100 * percentage;
        this.salePercentage = percentage;
    }

    //metoda koja brise akciju, vraca na osnovnu cenu
    this.deleteSale = function () {
        this.currentPrice = this.basePrice;
        this.salePercentage = 0;
    }

    //metoda koja ispisuje cenu proizvoda(malo sam je nabudzio)
    this.printPrice = function () {
        if (this.salePercentage == 0)   console.log("The price for " + this.name + " is " + this.currentPrice);
        else   console.log("The original price for " + this.name + " is " + this.basePrice+ ". But now you can get it on a " + this.salePercentage + "% sale only for " + this.currentPrice);
    }

    //metoda koja menja baznu cenu na neku novu
    this.changePrice = function (newPrice) {
        this.basePrice = newPrice;
    }
}


//napravio sam dva objekta paradajz i krastavac
let tomato = new Product("Tomato", 200);
let cucumber = new Product("Cucumber", 150);

tomato.sale(30);
tomato.printPrice();
cucumber.printPrice();