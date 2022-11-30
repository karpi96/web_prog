function Product(name, price) {
    this.name = name;
    this.basePrice = price;
    this.currentPrice = price;
    this.salePercentage = 0;

    this.sale = function (percentage) {
        this.currentPrice = this.basePrice - this.basePrice / 100 * percentage;
        this.salePercentage = percentage;
    }

    this.deleteSale = function () {
        this.currentPrice = this.basePrice;
        this.salePercentage = 0;
    }

    this.printPrice = function () {
        if (this.salePercentage == 0)   console.log("The price for " + this.name + " is " + this.currentPrice);
        else   console.log("The original price for " + this.name + " is " + this.basePrice+ ". But now you can get it on a " + this.salePercentage + "% sale only for " + this.currentPrice);
    }

    this.changePrice = function (newPrice) {
        this.basePrice = newPrice;
    }
}

let tomato = new Product("Tomato", 200);
let cucumber = new Product("Cucumber", 150);

tomato.sale(30);
tomato.printPrice();
cucumber.printPrice();