
// Pizzeria Dojo
function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    
    let pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: seleccionIngredientes(quesos),
        salsas: seleccionIngredientes(salsas)
    }

    function seleccionIngredientes(arregloIngredientes) {
        
        let ingredienteAlAzar = Math.floor(Math.random() * arregloIngredientes.length);
        let ingredienteSeleccionado;

        for (let i = 0; i < arregloIngredientes.length; i++) {
            if (arregloIngredientes[i] === arregloIngredientes[ingredienteAlAzar]) {
                ingredienteSeleccionado = arregloIngredientes[i];
            }
        }

        return ingredienteSeleccionado;
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





    