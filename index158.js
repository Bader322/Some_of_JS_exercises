


var games = [
    {
        name: "Crash Bandicoot N. Sane Trilogy",
        price: 1060,
        sold: 20,
        console: "PS4",
        showDetail: function(){
            console.log("name: " + this.name + "\nprice: " + this.price + "\nsold: " + this.sold + "\nconsole: " + this.console)
        }
    },
    {
        name: "Lego Marvel Super Heroes",
        price: 700,
        sold: 25,
        console: "XBOX",
        showDetail: function(){
            console.log("name: " + this.name + "\nprice: " + this.price + "\nsold: " + this.sold + "\nconsole: " + this.console)
        }
    },
    {
        name: "Gta V",
        price: 1449,
        sold: 30,
        console: "PS4",
        showDetail: function(){
            console.log("name: " + this.name + "\nprice: " + this.price + "\nsold: " + this.sold + "\nconsole: " + this.console)
        }
    },
    {
        name: "Mortal Kombat Xl",
        price: 1190,
        sold: 34,
        console: "PS4",
        showDetail: function(){
            console.log("name: " + this.name + "\nprice: " + this.price + "\nsold: " + this.sold + "\nconsole: " + this.console)
        }
    },
    {
        name: "Gta V",
        price: 1250,
        sold: 60,
        console: "XBOX",
        showDetail: function(){
            console.log("name: " + this.name + "\nprice: " + this.price + "\nsold: " + this.sold + "\nconsole: " + this.console)
        }

    }
]



let budget = games[0].price + games[1].price + games[2].price + games[3].price + games[4].price
console.log("I need " + budget + " to get all the games");
let gamesNames = []

for (let index = 0; index < games.length; index++) {
    gamesNames[index] = games[index].name
}
console.log(gamesNames);

let gamesPrices = [];

for (let index = 0; index < games.length; index++) {
    gamesPrices[index] = games[index].price
}
console.log(gamesPrices);
