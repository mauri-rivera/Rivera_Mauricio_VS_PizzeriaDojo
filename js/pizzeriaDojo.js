
// Pizzeria Dojo
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    
    let pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: seleccionQuesos(quesos),
        salsas: seleccionSalsas(salsas)
    }

    function seleccionSalsas(salsas) {
        
        salsaAlAzar = Math.floor(Math.random() * salsas.length);
        salsaSeleccionada = "";

        for (let i = 0; i < salsas.length; i++) {
            if (salsas[i] === salsas[salsaAlAzar]){
                salsaSeleccionada += salsas[i];
            }
        }

        return salsaSeleccionada;
    }

    function seleccionQuesos(quesos) {

        quesoAlAzar = Math.floor(Math.random() * quesos.length);
        quesoSeleccionado = "";

        for (let i = 0; i < quesos.length; i++) {
            if (quesos[i] === quesos[quesoAlAzar]) {
                quesoSeleccionado += quesos[i];
            }
        }

        return quesoSeleccionado;
    }

    return pizza;    
}

let pizzaPedidoUno = pizzaOven("estilo chicago", "tradicional", ["mozzarella"], ["peperoni","salchichas"]);
let pizzaPedidoDos = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);

console.log("");
console.log(`El primer pedido para la pizza será de: ${pizzaPedidoUno.tipoCorteza}, ${pizzaPedidoUno.tipoSalsa}, ${pizzaPedidoUno.quesos} y ${pizzaPedidoUno.salsas}`);
console.log("");
console.log(`El segundo pedido para la pizza será de: ${pizzaPedidoDos.tipoCorteza}, ${pizzaPedidoDos.tipoSalsa}, ${pizzaPedidoDos.quesos} y ${pizzaPedidoDos.salsas}`);
console.log("");





    