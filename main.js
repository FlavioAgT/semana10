// 1
function divide() {
    let number = parseInt(prompt('Introduce un número'))
    if (number % 2 === 0) {
        return `${number} número es divisible entre 2`
    } else {
        return `${number} número no es divisible entre 2`
    }
}
// console.log(divide())

// 2
function par(){
    let number = parseInt(prompt('Introduce un número par'))
    if (number % 2 === 0) {
        return alert(`${number} es par!`)
    } else {
        return alert(`${number} no es par!`)
    }
}
// par();

// 3
function minorNumber(){
    let number1 = parseInt(prompt('Introduce un número'))
    let number2 = parseInt(prompt('Introduce un segundo número'))
    if (number1 < number2) {
        return `${number1} es menor que ${number2}`
    } else {
        return `${number2} es menor que ${number1}`
    }
}
// console.log(minorNumber())

// 4
function largerNumber(){
    let number1 = parseInt(prompt('Introduce un número'))
    let number2 = parseInt(prompt('Introduce un segundo número'))
    let number3 = parseInt(prompt('Introduce un tercer número'))
    if (number1 > number2 && number1 > number3) {
        return `${number1} es mayor` 
    } else if (number2 > number1 && number2 > number3) {
        return `${number2} es mayor` 
    } else if (number3 > number1 && number3 > number2) {
        return `${number3} es mayor` 
    } 
}
// console.log(largerNumber())

// 5
function semana() {
    answer = prompt('Ingrese un día de la semana');
    if (answer === 'lunes') {
        return 'Es lunes'
    } else if (answer === 'viernes') {
        return 'Es viernes'
    } else if (answer === 'sabado' || answer ==='domingo'){
        return 'Es fin de semana'
    } else {
        return 'Es otro día de la semana'
    }
}
// console.log(semana());

// 6
function multiplos5 (){
    let number = parseInt(prompt('Introduce un número par'))
    let multiplos = [1];
    let i = 0
    do {
        i += 5;
        multiplos.push(i)
    } while (i <= number);
    console.log(multiplos);
}
// multiplos5();

// 7
function loteria (){
    let number1 = parseInt(prompt('Introduce un número'))
    let number2 = parseInt(prompt('Introduce un segundo número'))
    for (let i = 1; i <= 50; i++){
        if (i === number1 || i === number2){
            console.log(`${i} Loteria!`)
        } else {
            console.log(i)
        }
    }
}
// loteria()

// 8


// 9

// 10
//  11
function calicifacion (){
    do { let answer = (prompt('Introduce una calificación'));
        if (answer >= 1 && answer <= 10){
            switch (true) {
                case (answer >= 1 && answer < 6) :
                    alert ('reprobado')
                    break;
                case (answer >= 6 && answer <= 8) :
                    alert ('regular')
                    break;
                case (answer == 9) :
                    alert ('bien')
                    break;
                case (answer == 10) :
                    alert ('excelente')
                    break;
            }
        } else { 
            alert('Invalido') 
        } 
    } while (true)
}
// calicifacion();

// 12
const helados = [
    {topping: 'ninguno', precio: 50, disponible: 'sí'},
    {topping: 'oreo', precio: 10, disponible: 'sí'},
    {topping: 'kitkat', precio: 15, disponible: 'no'},
    {topping: 'brownie', precio: 20, disponible: 'sí'},
];

function precio () {
    let pedido = prompt('Elija un topping -ninguno -oreo -kitkat -brownie')
    for (let i = 0; i <= helados.length; i++){
        if (pedido === helados[i].topping) {
            console.log(helados[i].topping)
        }
}}

precio()
