// 1. Create an array to hold an inventory of store items.


let storeItems=[
]
// 2. Create three items, each having the properties of name, model, cost, and quantity.
let items1={

    name:"car",
    model:"bmw-2022", 
    cost:5000000,
    quantity:10,

}
let items2={

    name:"bike",
    model:"2021", 
    cost:1000000,
    quantity:100,

}

let items3={

    name:"bicycle",
    model:"2021", 
    cost:20000,
    quantity:400,

}
// 3. Add all three objects to the main array using an array method, and then logthe inventory array to the console.
 storeItems.unshift(items1,items2,items3)
console.log(storeItems);

///////////////////

// 4. Access the quantity element of your third item, and log it to the console.Experiment by adding and accessing more elements within your datastructure.

console.log(storeItems[2]);

// adding and accessing more elements within items 3 object

items3.color="Black"
console.log(storeItems[2]);

