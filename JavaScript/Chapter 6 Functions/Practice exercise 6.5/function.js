//Returning with arrow functions

let addTwoNumber = (x, y) => x + y;
let result = addTwoNumber(12, 12);
console.log(result);

//Immediately invoked function expression
(function() {

    console.log('asad')

})();

//Recursive functions
function Recursive(num) {
    console.log(num)
    if (num > 12) {
        Recursive(++num)

    }
}
Recursive(6);