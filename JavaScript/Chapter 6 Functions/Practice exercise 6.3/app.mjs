// Create a basic calculator that takes two numbers and one string value indicating 
// an operation
 import PromptSync from "prompt-sync";

 const prompt= PromptSync();
function calculator() {

    let result;
  let val1=prompt('Enter the valur 1 ')
 val1=Number(val1)
 let val2=prompt('Enter the valur 2 ')
 val2=Number(val2)
 let operator=prompt('Enter the operator + or - ')
if (operator==='+') {
    result=val1 + val2;

}

else if(operator==="-"){

    result=val1-val2;


}

else{
console.log("Please the correct operator + or - ")

}

console.log(`${val1} ${operator} ${val2} result is ${result}`)
}


calculator();
