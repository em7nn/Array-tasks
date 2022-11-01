var machine = [
    {
        brand:"Mercedes",
        model:"C-class",
        color:"black",
        Year:"2020"
    },
    {
        brand:"Tesla",
        model:"roadster",
        color:"red",
        Year:"2008"

    },
    {
        brand:"Toyota",
        model:"Prius",
        color:"blue",
        Year:"1997"
    },
    {
        brand:"Ford",
        model:"Raptor",
        color:"gray",
        Year:"2010"
    },
    {
        brand:"Lamborghini",
        model:"Urus",
        color:"white",
        Year:"2017"
    },
]
for (var i = 0; i<machine.length; i++){

    if (machine[i].Year> 2010){
     
     
        console.log(machine[i].brand);
    } 
}