const contenedorIndumentaria = document.getElementById("producto-disponible");
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritoVacioElement = document.getElementById("vacio");
const totalesElement = document.getElementById("totales");
const reiniciarCarritoElement = document.getElementById("reiniciar");

function crearProducto(){
    contenedorIndumentaria.innerHTML = ""
    const productos = JSON.parse(localStorage.getItem("tiendaAlbinegra"));
    console.log(productos);
    if (productos && productos.length > 0) { 
        productos.forEach((producto) => {
            const nuevaIndumentaria = document.createElement("div");
            nuevaIndumentaria.classList = "indumentaria-disponible-carro";
            nuevaIndumentaria.innerHTML = `
                <img src=${producto.img}>
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <div>
                    <button>-</button>
                    <span class="catidad">${producto.cantidad}</span>
                    <button>+</button>
                </div>
            `
            contenedorIndumentaria.appendChild(nuevaIndumentaria);
            nuevaIndumentaria
                .getElementsByTagName("button")[1]
                .addEventListener("click", (e) => {
                    const cuentaElementos = e.target.parentElement.getElementsByTagName("span")[0]; 
                    cuentaElementos.innerText = agregarAlCarrito(producto);
                    actualizarTotales();
                });
            nuevaIndumentaria
                .getElementsByTagName("button")[0]
                .addEventListener("click", (e) => {
                    restarAlCarrito(producto);
                    crearProducto();
                    actualizarTotales();    
                });
        });
    }
}

crearProducto();
actualizarTotales();
revisarVacio();


function actualizarTotales(){
    const productos = JSON.parse(localStorage.getItem("tiendaAlbinegra"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0){
        productos.forEach(producto =>{
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        });
    }
    unidadesElement.innerText = unidades;
    precioElement.innerText = precio
}

function revisarVacio(){
    const productos = JSON.parse(localStorage.getItem("tiendaAlbinegra"));
    carritoVacioElement.classList.toggle("escondido",productos && productos.length>0);
    totalesElement.classList.toggle("escondido",!(productos && productos.length>0));
}
revisarVacio();

reiniciarCarritoElement.addEventListener("click",reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("tiendaAlbinegra");
    crearProducto();
    revisarVacio();
    actualizarTotales();
    actualizarNumeroCarrito();
}


