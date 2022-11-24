let val = "1000";

(function() {
    let val = "100"; // local scope variable
    console.log(val);
})();

let result = (function() {
    let val = "asad";
    return val;
})();
console.log(result);
console.log(val);

(function(val) {
    console.log(`My name is ${val}`);
})("asad");