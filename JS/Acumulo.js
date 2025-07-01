function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("tiendaAlbinegra"));
    console.log(memoria);
    let cuenta = 0;
    if(!memoria){
        const nuevaIndumentaria = getNuevoProductoParaMemoria(producto);
        localStorage.setItem("tiendaAlbinegra",JSON.stringify([nuevaIndumentaria]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(tiendaAlbinegra => tiendaAlbinegra.id === producto.id)
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto))   
            cuenta = 1; 
        } else{
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("tiendaAlbinegra",JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
    return cuenta;
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("tiendaAlbinegra"));
    const indiceProducto = memoria.findIndex(tiendaAlbinegra => tiendaAlbinegra.id === producto.id)
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
    } else {
        memoria[indiceProducto].cantidad--;
    }
    if (memoria.length === 0) {
        localStorage.removeItem("tiendaAlbinegra");
    } else {
        localStorage.setItem("tiendaAlbinegra", JSON.stringify(memoria));
    }
    actualizarNumeroCarrito();
    revisarVacio();
}


function getNuevoProductoParaMemoria(producto){
    const nuevaIndumentaria = producto;
    nuevaIndumentaria.cantidad = 1;
    return nuevaIndumentaria;
}

const acumuladoCarritoElementos = document.getElementById("acumulado-carrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("tiendaAlbinegra"));
    if(memoria && memoria.length >0){
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0 );
    acumuladoCarritoElementos.innerText = cuenta
    } else {
        acumuladoCarritoElementos.innerText = 0;
    }
}
actualizarNumeroCarrito();
