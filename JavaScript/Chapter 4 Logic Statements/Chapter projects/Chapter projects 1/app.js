let dynamicNumber=100;
let userNmuber=101;
let output;


if (userNmuber>dynamicNumber) {

    output= userNmuber + ' was greater than '+ dynamicNumber
    
}

else if(userNmuber===dynamicNumber){

    output= userNmuber + ' was equal '+ dynamicNumber
}
else if(userNmuber<dynamicNumber){

    output= userNmuber + ' was less than '+ dynamicNumber 
}
else{

    output='change the number';

}
console.log(output)