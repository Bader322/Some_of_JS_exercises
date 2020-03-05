let propertiesNames = ['name','price', 'sold', 'console' ]

var games = [
    {
        name: "Crash Bandicoot N. Sane Trilogy",
        price: 1060,
        sold: 20,
        console: "PS4"
    },
    {
        name: "Lego Marvel Super Heroes",
        price: 700,
        sold: 25,
        console: "XBOX"
    },
    {
        name: "Gta V",
        price: 1449,
        sold: 30,
        console: "PS4"
    },
    {
        name: "Mortal Kombat Xl",
        price: 1190,
        sold: 34,
        console: "PS4"
    },
    {
        name: "Gta V",
        price: 1250,
        sold: 60,
        console: "XBOX"

    }
]

games.forEach(function(el,index){
    //console.log(games[index])
    console.log(`${propertiesNames[index]} ${games[index]} ` )

} )

