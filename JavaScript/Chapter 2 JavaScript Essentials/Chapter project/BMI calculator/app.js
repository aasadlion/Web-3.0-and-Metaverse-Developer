
let height =72; // inches
let weight= 120; // in pound

height=height*2.54;  // height convert in cm

weight=weight/2.2046; // weight convert in kilo
let BMI;

//weight (kg) / [height (m)]2 BMI formula
BMI=weight/height/height*10000;

console.log(`Height: ${height} cm,`)
console.log(`Weight: ${weight} kilo`)
console.log(`Your BMI is: ${BMI}`)