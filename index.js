
var finCiclo = false
var num1
var num2

function suma(num1, num2){
    return num1 + num2
}

function resta(num1, num2){
    return num1 - num2
}

function multi(num1, num2){
    return num1 * num2
}

function divi(num1, num2){
    return num1 / num2
}

function mensage(tipo, resultado){
    alert("El resultado de tu operacion " + tipo + ":" + resultado)
}

function setNumeros(){
    num1 = parseInt(prompt("Ingresa un primer numero"))
    num2 = parseInt(prompt("Ingresa el segundo numero"))
}


while(finCiclo === false){

    let tipo = prompt("Ingresa una operacion: (Escribe SUMA, RESTA, MULTIPLICACION, DIVISION").toUpperCase()
    
    

    switch(tipo) {

        case "SUMA": 
            setNumeros()
            mensage(tipo, suma(num1, num2))
            finCiclo = true
            break

        case "RESTA":
            setNumeros()
            mensage(tipo, resta(num1, num2))
            finCiclo = true
            break
        
        case "MULTIPLACION":
            setNumeros()
            mensage(tipo, multi(num1, num2))
            finCiclo = true
            break
        
        case "DIVISION":
            setNumeros()
            mensage(tipo, divi(num1, num2))
            finCiclo = true
            break

    }
}