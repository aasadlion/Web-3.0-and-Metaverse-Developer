   // rules ------Rock will beat out Scissors,  Paper will beat out Rock, and  Scissors will beat out Paper
// 
// ("0 means: Rock")
// ("1 means: Paper")
// ("2 means: Scissors")


import promptSync from 'prompt-sync';
const prompt = promptSync();
console.log(`------------------------------------------------------------------------------------------------`)

console.log("Rock Paper Scissors game")
console.log("0 means: Rock")
console.log("1 means: Paper")
console.log("2 means: Scissors")
console.log(`------------------------------------------------------------------------------------------------`)

let userPlayer=prompt("User to enter a number between 0-2 ")
let result;
let computer;
computer=Math.random()*3;
computer=Math.floor(computer);



if (computer==userPlayer) {
    result="Draw"
}
else if(computer==0 && userPlayer==1){

    result="Computer Wins!"

}
else if(computer==0 && userPlayer==2
    ){
     

    result="Player Win!"
                                                           
}
else if(computer==1 && userPlayer==0){

    result="Computer Wins!"

}
else if(computer==1 && userPlayer==2){

    result="Player Win!"

}
else if(computer==2 && userPlayer==1){

    result="Computer Wins!"

}
else if(computer==2 && userPlayer==0){

    result="Player Win!"

}
console.log(`Computer chooes a `, computer)
console.log(`Player chooes a `, userPlayer)
console.log(result)