var car={

    make:"Bayerische",
    model:"BMW-2022",
    color:"red",
    forSale:"forSale property"
}
var mycar= car;
mycar["color"] = "Green";

mycar["forSale"]="Available for purchase."


console.log(`Make: ${mycar.make} Model: ${mycar.model}`)
console.log(`property: ${mycar.forSale}`)

