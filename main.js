// 1
function divide() {
    let number = parseInt(prompt("Introduce un número"));
    if (number % 2 === 0) {
        return `${number} número es divisible entre 2`;
    } else {
        return `${number} número no es divisible entre 2`;
    }
}
// console.log(divide())

// 2
function par() {
    let number = parseInt(prompt("Introduce un número par"));
    if (number % 2 === 0) {
        return alert(`${number} es par!`);
    } else {
        return alert(`${number} no es par!`);
    }
}
// par();

// 3
function minorNumber() {
    let number1 = parseInt(prompt("Introduce un número"));
    let number2 = parseInt(prompt("Introduce un segundo número"));
    if (number1 < number2) {
        return `${number1} es menor que ${number2}`;
    } else {
        return `${number2} es menor que ${number1}`;
    }
}
// console.log(minorNumber())

// 4
function largerNumber() {
    let number1 = parseInt(prompt("Introduce un número"));
    let number2 = parseInt(prompt("Introduce un segundo número"));
    let number3 = parseInt(prompt("Introduce un tercer número"));
    if (number1 > number2 && number1 > number3) {
        return `${number1} es mayor`;
    } else if (number2 > number1 && number2 > number3) {
        return `${number2} es mayor`;
    } else if (number3 > number1 && number3 > number2) {
        return `${number3} es mayor`;
    }
}
// console.log(largerNumber())

// 5
function semana() {
    answer = prompt("Ingrese un día de la semana");
    if (answer === "lunes") {
        return "Es lunes";
    } else if (answer === "viernes") {
        return "Es viernes";
    } else if (answer === "sabado" || answer === "domingo") {
        return "Es fin de semana";
    } else {
        return "Es otro día de la semana";
    }
}
// console.log(semana());

// 6
function multiplos5() {
    let number = parseInt(prompt("Introduce un número par"));
    let multiplos = [1];
    let i = 0;
    do {
        i += 5;
        multiplos.push(i);
    } while (i <= number);
    console.log(multiplos);
}
// multiplos5();

// 7
function loteria() {
    let number1 = parseInt(prompt("Introduce un número"));
    let number2 = parseInt(prompt("Introduce un segundo número"));
    for (let i = 1; i <= 50; i++) {
        if (i === number1 || i === number2) {
            console.log(`${i} Loteria!`);
        } else {
            console.log(i);
        }
    }
}
// loteria()

// 8
function solicitarNumeros() {
    let numbers = [];
    do {
        let answer = parseFloat(
            prompt(
                "Ingrese un numero, para terminar de preguntar introduzca 0",
                0
            )
        );
        if (answer === 0) {
            break;
        } else if (!isNaN(answer)) {
            numbers.push(answer);
        }
    } while (true);
    alert(`Numeros ingresados = ${numbers}`);
}
// solicitarNumeros();

// 9
function solicitarTexto() {
    let text = [];
    do {
        let answer = prompt(
            "Ingrese un numero, para terminar de preguntar no introduzca algún valor",
            ""
        );
        if (answer === "") {
            break;
        } else if (isNaN(parseFloat(answer))) {
            text.push(answer);
        }
    } while (true);
    alert(`Textos ingresados = ${text}`);
}
// solicitarTexto();

// 10
function solicitarDia() {
    do {
        let dia = prompt("Ingrese un día de la semana.", "lunes").toLowerCase();
        if (dia === "domingo") {
            alert("Ve a descansar");
            break;
        } else {
            switch (dia) {
                case "lunes":
                    alert("Primer día de la semana");
                    break;
                case "martes":
                    alert("Segundo día de la semana");
                    break;
                case "miercoles":
                    alert("Tercer día de la semana");
                    break;
                case "jueves":
                    alert("Cuarto día de la semana");
                    break;
                case "viernes":
                    alert("Quinto día de la semana");
                    break;
                case "sabado":
                    alert("Sexto día de la semana");
                    break;
            }
        }
    } while (true);
}
solicitarDia();

//  11
function calicifacion() {
    do {
        let answer = prompt("Introduce una calificación");
        if (answer >= 1 && answer <= 10) {
            switch (true) {
                case answer >= 1 && answer < 6:
                    alert("reprobado");
                    break;
                case answer >= 6 && answer <= 8:
                    alert("regular");
                    break;
                case answer == 9:
                    alert("bien");
                    break;
                case answer == 10:
                    alert("excelente");
                    break;
            }
        } else {
            alert("Invalido");
        }
    } while (true);
}
// calicifacion();

// 12
const helados = [
    { nombre: "ninguno", precio: 50, disponible: "sí" },
    { nombre: "oreo", precio: 10, disponible: "no" },
    { nombre: "kitkat", precio: 15, disponible: "sí" },
    { nombre: "brownie", precio: 20, disponible: "sí" },
];

function pedidoHelado() {
    let lista = helados.map((topping) => topping.nombre);
    let pedido = prompt(`Elija un topping: ${Object.values(lista)}`, "ninguno");
    let costo = helados.find((topping) => topping.nombre === "ninguno").precio;
    let topping = helados.find((topping) => topping.nombre === pedido);

    //Precio base + precio de topping
    if (topping.disponible === "sí" && pedido !== "ninguno") {
        costo += topping.precio;
    } else if (pedido !== "ninguno") {
        alert("No tenemos este topping, lo sentimos.");
    }

    alert(`El precio de su pedido es = ${costo}`);
}

// pedidoHelado();

// 13
const programasEstudio = [
    { nombre: "course", precio: 4999, meses: 3 },
    { nombre: "carrera", precio: 3999, meses: 6 },
    { nombre: "master", precio: 2999, meses: 12 },
];
const becas = [
    { nombre: "ninguna", descuento: 0 },
    { nombre: "facebook", descuento: 20 },
    { nombre: "google", descuento: 15 },
    { nombre: "jesua", descuento: 50 },
];
function adquirirPrograma() {
    let programa;
    let beca;
    let precioTotal;
    function preguntarUsuario(datos, pregunta) {
        let lista = datos.map((dato) => dato.nombre);
        do {
            let answer = prompt(`${pregunta} = ${lista}`, ".").toLowerCase();
            if (lista.includes(answer) && answer !== ".") {
                return datos.find((valor) => valor.nombre === answer);
            }
        } while (true);
    }
    programa = preguntarUsuario(programasEstudio, "Seleccione un programa");
    beca = preguntarUsuario(becas, "Cuenta con una beca?");

    if (beca.descuento !== 0) {
        precioTotal = programa.precio * (beca.descuento / 100);
    } else {
        precioTotal = programa.precio;
    }
    precioTotal *= programa.meses;

    alert(`El precio total es ${precioTotal}$`);
}
// adquirirPrograma();

// 14
const vehiculos = [
    { tipo: "autobus", precio: 0.5 },
    { tipo: "coche", precio: 0.2 },
    { tipo: "moto", precio: 0.1 },
];
function calcularPrecio() {
    let vehiculo;
    let litros;
    let kilometros;
    function preguntarVehiculo(datos) {
        let lista = datos.map((dato) => dato.tipo);
        do {
            let answer = prompt(
                `Tipo de vehiculo = ${lista}`,
                "."
            ).toLowerCase();
            if (lista.includes(answer) && answer !== ".") {
                return datos.find((valor) => valor.tipo === answer);
            }
        } while (true);
    }
    function preguntarCantidad(pregunta) {
        do {
            let answer = parseInt(prompt(`${pregunta}`), 0);
            if (!isNaN(answer)) {
                return answer;
            }
        } while (true);
    }
    vehiculo = preguntarVehiculo(vehiculos);
    kilometros = preguntarCantidad("Kilometros recorridos =");
    litros = preguntarCantidad("Litros consumidos =");

    let costoTotal = vehiculo.precio * kilometros;
    if (litros > 100) {
        costoTotal += 10;
    } else {
        costoTotal += 5;
    }
    alert(`Precio total = ${costoTotal}`);
}
// calcularPrecio();
