let nome = " Luisman "
let xp = [1000 , 1001 , 2000 , 2001 , 5000 , 5001 , 7000 , 7001 , 8000 , 8001 , 9000 , 9001 , 10000 , 10001 , 15000]

let xpAtual = 5100

console.log("O herói de nome:  " + nome + "está no nível:")

switch(true){ 
  case xpAtual < xp[0]:
    console.log("Ferro")
    break
    case xpAtual >= xp[1] && xpAtual < xp[2]: 
    console.log("Bronze")
    break
    case xpAtual >= xp[3] && xpAtual < xp[4]:
      
      console.log("Prata")
      break
      case xpAtual >= xp[5] && xpAtual < xp[6]:
        
        console.log("Ouro")
        break 
        case xpAtual >= xp[7] && xpAtual < xp[8]:
          
          console.log("Platina")
          break
          case xpAtual >= xp[9] && xpAtual < xp[10]:
            
            console.log("Ascendente")
            break 
            case xpAtual >= xp[11] && xpAtual < xp[12]:
              
              console.log("Imortal")
              break
              case xpAtual >= xp[13] && xpAtual < xp[14]:
                
                console.log("Radiante")}
                