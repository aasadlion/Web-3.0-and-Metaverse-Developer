let prize=1;
// prize=Number(prize);

let output=("My Selection:")

switch (prize) {
    case 1:
        output=output.concat(' Gold' )
        break;

        case 2:
            
            output=output.concat(' Coin' )
            break;

            case 3:
               
                output=output.concat(' Big of' )
                break;

                case 4:
                    output=output.concat(' Big' )
    
                    break;
                    case 5:
               
                        output=output.concat(' Silver' )
                        break;
                        case 6:
                            output=output.concat(' Bricks' )
                            break;
    default:
        output=output.concat(' Sorry Try Again' )
        break;
}
console.log(output);