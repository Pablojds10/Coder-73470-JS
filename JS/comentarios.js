const contenedorComentario = document.getElementById("comentarioDisponible");


function consumirApi(){
fetch('https://jsonplaceholder.typicode.com/comments?_limit=15')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(com => {
        const nuevoComentario = document.createElement("div");
        nuevoComentario.classList = "comentarioDisponible";
        nuevoComentario.innerHTML = `
            <h1 class="nombreComentario"> Nombre: ${com.name}</h1>
            <h3 class="emailComentario">Email: ${com.email}</h3>
            <p>Descripción: ${com.body}</p>
            <hr></hr>
            `
        contenedorComentario.appendChild(nuevoComentario);
    });
  })
  .catch(error => console.error('Error:', error));
}

consumirApi();