const contenedorIndumentaria = document.getElementById("producto-disponible");

function crearProducto(productos) {
  productos.forEach(producto => {
    const nuevaIndumentaria = document.createElement("div");
    nuevaIndumentaria.classList = "indumentaria-disponible";
    nuevaIndumentaria.innerHTML = `
      <img src=${producto.img}>
      <h3>${producto.nombre}</h3>
      <p>$${producto.precio}</p>
      <button>Agregar</button>
    `;

    contenedorIndumentaria.appendChild(nuevaIndumentaria);

    nuevaIndumentaria.getElementsByTagName("button")[0].addEventListener("click", () => {
      agregarAlCarrito(producto);

      Toastify({
        text: `${producto.nombre} agregado al carrito`,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        close: true,
        style: {
          background: "linear-gradient(to right, #494949ff, #020202ff)",
        }
      }).showToast();
    });
  });
}
crearProducto(tiendaAlbinegra)