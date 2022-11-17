
let myWork= [];

for (let i = 1; i <= 10; i++) {
 
    let status=i%2 ? true: false;

 let list={


    name: `Lesson ${i}`, status: status,
 }
    
myWork.push(list)

}
 
console.log(myWork)