
let mostrartienda = document.getElementById("mostrartienda3")
let cartas = document.getElementById("carta");
let ocultartienda = document.getElementById("ocultartienda3")
ocultartienda.addEventListener("click", ocultartienda2)

let carrito = []


class Inmueble {
    constructor(nombre, ubicacion, ambientes, precio, propiedad, foto, descripcion) {

        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.ambientes = ambientes;
        this.precio = precio;
        this.propiedad = propiedad;
        this.foto = foto;
        this.descripcion = descripcion;

    }
}


/*const casa230m = new Inmueble("casa230m", "Recoleta", "4", 210000, "casa", "casa230m.jpg", "Casa de 4 ambientes en uno de los mejores barrios de CABA.");
const smallterreno = new Inmueble("smallterreno", "neuquen", "0", 160000, "terreno", "smallterreno.jpg", "Terreno ubicado en Neuquén cerca del puerto con una vista increíble al río.");
const mansion200m = new Inmueble("mansion200m", "olivos", "6", 300000, "mansion", "mansion200mjpg.jpg", "Exclusiva mansión en pleno corazón de CABA.");
const departamentoXX = new Inmueble("departamentoXX", "merlo", "2", 100000, "departamento", "departamentoXX.jpg", "Departamento de 2 ambientes en Buenos Aires.");
const casa215m = new Inmueble("mansion215m", "Palermo", "3", 150000, "casa", "casa215m.jpg", "Casa de 3 ambientes amueblado en zona de Palermo.")*/

const cargarinmuebles = async () => {

    const response = await fetch("inmuebles.json")
    const data = await response.json()
    console.log(data)
    for (let inmueble of data) {

let nuevoinmuebles = new Inmueble (inmueble.nombre,inmueble.ubicacion,inmueble.ambientes,inmueble.precio,inmueble.propiedad,inmueble.foto,inmueble.descripcion)
propiedades.push(nuevoinmuebles)
console.log(nuevoinmuebles)
    }

}

cargarinmuebles()

const propiedades = []




function mostrarinmuebles() {

    
    cartas.innerHTML = ``
    for (let inmueble of propiedades) {

        let nuevoinmueble = document.createElement("div")
        nuevoinmueble.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")

        nuevoinmueble.innerHTML = `<div class="card" style="width: 18rem">
    <img class="cuadrado" src="../assets/${inmueble.foto}" alt="${inmueble.nombre}">
<div class="card-body">
<h5 class="card-title">${inmueble.nombre}</h5>
    <p class="card-text">${inmueble.descripcion}</p>
    <button onclick="agregarproducto(${inmueble.nombre})"  class="btn btn-primary">Agregar al carrito</button>
</div>`;

        cartas.appendChild(nuevoinmueble)



    }
}


function ocultartienda2() {

    cartas.innerHTML = ``
}


mostrartienda.onclick = () => {

    mostrarinmuebles()
}

mostrarinmuebles()


/*function agregarproducto(inmu) {



    const item = propiedades.find((inmueble) => inmueble.nombre === inmueble.nombre)
    carrito.push(item)
    mostrarcarrito()
}



const mostrarcarrito = () => {

    const modalbody = document.querySelector('.modal .modal-body')

    carrito.forEach((inmueble) => {


        modalbody.innerHTML = `
    <div class= "modal-contenedor">
    <div>
    <img class="img-fluid img-carrito" src="../assets/${inmueble.foto}"/>
    </div>
    <p>Producto: ${inmueble.nombre}<p>
    <p>ubicacion: ${inmueble.ubicacion}<p>
    <p>ambientes: ${inmueble.ambientes}<p>
    <p>precio: ${inmueble.precio}<p>
    <p>propiedad: ${inmueble.propiedad}<p>
    <p>descripcion: ${inmueble.descripcion}<p>
    <button class="btn btn-danger" >Eliminar producto </button>
    </div>
    `
    })

}*/

