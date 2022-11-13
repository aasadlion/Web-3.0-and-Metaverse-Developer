console.log('Friend checker game')
let friendname=prompt('Enter the Name')

let output;

switch (friendname) {
    case "asad":
    case "ali":
    case "iqbal":
    case "ahmad":
    case "fahad":
        
    output=friendname+' is my Best Friend'
        break;

    default:
output="I don't know "+friendname+ ' Enter the other name';

    break;
}

console.log(output)