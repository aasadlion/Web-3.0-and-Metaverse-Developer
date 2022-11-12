import promptSync from 'prompt-sync';
const prompt = promptSync();
var  age = prompt("What is your age?");
age=Number(age)
console.log( typeof age)

if (age>=21) {
  console.log(`confirm entry to a venue and the ability to purchase alcohol`)
  
}
else if(age>=19){

console.log(`confirm entry to the venue but deny the purchase of alcohol`)

}
else{

  console.log(`deny entry if none are true`)
}