let indumentaria = [
    {id:1, producto: "Camiseta Titular", valor: 35000},
    {id:2, producto: "Camiseta Suplente", valor: 30000},
    {id:3, producto: "Buzo de entrenamiento", valor: 42000},
    {id:4, producto: "Rompeviento", valor: 38000},
    {id:5, producto: "Camperon Largo", valor: 60000},
    {id:6, producto: "Pantalon Conrto", valor: 20000},
    {id:7, producto: "Chupin Entrenamiento", valor: 31000},
    {id:8, producto: "Chomba Viaje", valor: 18000},
    {id:9, producto: "Remera 1908", valor: 16000},
    {id:10, producto: "Buzo Canguro 1908", valor: 40000}
];

let compras = []; 
compraIndumentaria();

function compraIndumentaria() {
    let mensaje = "Vesti tu pasión Albinegra";
    for (let i = 0; i < indumentaria.length; i++) { 
        mensaje+= '\n' + indumentaria[i].id +' '+ indumentaria[i].producto + ' $' + indumentaria[i].valor ;
    }
    mensaje += '\n' + "11 Finalizar Compra"
    let seleccionado = parseInt(prompt(mensaje));

    if (seleccionado != 11) {
        agregarIndumentaria(seleccionado);
    } else {
        mostrarCompras();
    }
}

function agregarIndumentaria(seleccionado) {
    let producto = indumentaria.some(item => item.id === seleccionado);
    
    if (producto) {
        compras.push(seleccionado);
        console.log(compras);
        compraIndumentaria();
    } else {
        alert("El Producto no existe");
        compraIndumentaria();
    }
}

function mostrarCompras() {
    if(compras.length !== 0){
        let comprasConcatenadas = 'Los productos en tu carrito son: ';
        let monto=0;
        let resumen = {};

        compras.forEach(id => {
            if (!resumen[id]) resumen[id] = 0;
            resumen[id]++;
        });

        for (let id in resumen) {
            let producto = indumentaria.find(item => item.id === parseInt(id));
            comprasConcatenadas += `\n${producto.producto} x${resumen[id]} $${(producto.valor * resumen[id]).toLocaleString('es-AR')}`;
            monto += producto.valor * resumen[id];
        }

        alert(comprasConcatenadas);
        alert("El monto de su compra es $" + monto.toLocaleString('es-AR'));
        let opcion = prompt("Desea continuar su compra?\n1. Seguir Comprando\n2. Finalizar");
            if (opcion === "1") {
                alert("Continuar con la compra...");
                compraIndumentaria();
            } else if (opcion === "2") {
                alert("¡Gracias por tu visita!");
            } else {
                alert("Opción no válida. Por favor, elige 1 o 2.");
                let opcion = prompt("¿Qué deseas hacer?\n1. Seguir Comprando\n2. Finalizar");
            }
    } else {
        let opcion = prompt("Desea continuar su compra?\n1. Seguir Comprando\n2. Finalizar");
            if (opcion === "1") {
                alert("Continuar con la compra...");
                compraIndumentaria();
            } else if (opcion === "2") {
                alert("¡Gracias por tu visita!");
            } else {
                alert("Opción no válida. Por favor, elige 1 o 2.");
                let opcion = prompt("Desea continuar su compra?\n1. Seguir Comprando\n2. Finalizar");
            }
    }
}



//si queres crear una un mensaje de volver a comprar despues de mostrar el monto crear un mensaje con 
//opcion 1 volver a comprar opcion 2 salir crear un mensaje concatenando con /n las dos opciones y hacer un if
// si el numero es opcion uno llamar al metodo agregarIndumentaria si es igual a dos mostrar mensaje gracias por su compra
