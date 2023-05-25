let mostrartienda = document.getElementById("mostrartienda3")
let cartas = document.getElementById("carta");
let ocultartienda = document.getElementById("ocultartienda3")
ocultartienda.addEventListener("click", ocultartienda2)
let vaciarCarrito= document.getElementById("vaciarCarrito")

let carrito = []


class Inmueble {
    constructor(id, nombre, ubicacion, ambientes, precio, propiedad, foto, descripcion) {

        this.id = id;
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.ambientes = ambientes;
        this.precio = precio;
        this.propiedad = propiedad;
        this.foto = foto;
        this.descripcion = descripcion;

    }
}

const cargarinmuebles = async () => {
    const response = await fetch("inmuebles.json")
    const data = await response.json()

    for (let inmueble of data) {

        let nuevoinmuebles = new Inmueble(inmueble.id, inmueble.nombre, inmueble.ubicacion, inmueble.ambientes, inmueble.precio, inmueble.propiedad, inmueble.foto, inmueble.descripcion)
        propiedades.push(nuevoinmuebles)

        mostrarinmuebles()

    }

}


const propiedades = []


function mostrarinmuebles() {


    cartas.innerHTML = ``
    for (let inmueble of propiedades) {
        const { id, nombre, precio, foto, descripcion } = inmueble
        let nuevoinmueble = document.createElement("div")
        nuevoinmueble.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")

        nuevoinmueble.innerHTML = `<div class="card" style="width: 18rem">
    <img class="cuadrado" src="../assets/${foto}" alt="${nombre}">
<div class="card-body">
<h5 class="card-title">${nombre}</h5>
    <p class="card-text">${descripcion}</p>
    <p class="card-text">${precio} US$</p>
    <button id="comprar${id}"class="btn btn-primary">Agregar al carrito</button>
    
</div>`;
        cartas.appendChild(nuevoinmueble)

        const btnComprar = document.getElementById(`comprar${id}`)
        btnComprar.addEventListener("click", () => {
            let modal = document.getElementById("modal-body");
            let nuevocarro = document.createElement("div");
            nuevocarro.innerHTML = `<div>
            
            <div class="modal-contenedor">
            <div>
            <img class="img-fluid img-carrito" src="../assets/${foto}"/>
            </div>
            <div>
            <p>ID :${id}</p>
            <p>Producto: ${nombre}</p>
            <p>Precio: ${precio}</p>
            </div>
            </div>
            </div>`

            modal.appendChild(nuevocarro)

            vaciarCarrito.addEventListener("click", ()=>{

                nuevocarro.innerHTML =``
            
                const eliminarProducto = document.getElementById(`eliminarproducto${id}`)
                eliminarProducto.addEventListener("click",()=>{

                    carrito.splice("eliminarproducto${id}")

                })
            })
        })
    };
}




function ocultartienda2() {

    cartas.innerHTML = ``
}


mostrartienda.onclick = () => {

    mostrarinmuebles()
}

cargarinmuebles()

