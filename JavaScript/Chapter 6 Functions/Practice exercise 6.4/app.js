const myArr = [];

for (let x = 0; x < 4; x++) {
    let val1 = 2 * x;
    let val2 = x * x;
    let res = cal(val1, val2, "+");
    myArr.push(res);
}
console.log(myArr);

function cal(a, b, op) {
    if (op == "-") {
        return a - b;
    } else {
        return a + b;
    }
}