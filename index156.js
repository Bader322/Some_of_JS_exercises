
const readline = require('readline')

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

games.forEach(function(el,index){
    // console.log(el, index);
    el.showDetail();
});