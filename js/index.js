
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


const casa230m = new Inmueble("casa230m", "Recoleta", "4", 210000, "casa", "casa230m.jpg", "Casa de 4 ambientes en uno de los mejores barrios de CABA.");
const smallterreno = new Inmueble("smallterreno", "neuquen", "0", 160000, "terreno", "smallterreno.jpg", "Terreno ubicado en Neuquén cerca del puerto con una vista increíble al río.");
const mansion200m = new Inmueble("mansion200m", "olivos", "6", 300000, "mansion", "mansion200mjpg.jpg", "Exclusiva mansión en pleno corazón de CABA.");
const departamentoXX = new Inmueble("departamentoXX", "merlo", "2", 100000, "departamento", "departamentoXX.jpg", "Departamento de 2 ambientes en Buenos Aires.");
const casa215m = new Inmueble("mansion215m", "Palermo", "3", 150000, "casa", "casa215m.jpg", "Casa de 3 ambientes amueblado en zona de Palermo.")




const propiedades = [casa230m, smallterreno, mansion200m, departamentoXX, casa215m]

const propiedadesDesestructuradas = propiedades.map(({ nombre, ubicacion, ambientes, precio, propiedad, foto, descripcion }) => ({
    nombre,
    ubicacion,
    ambientes,
    precio,
    propiedad,
    foto,
    descripcion,
}));



function mostrarinmuebles() {

    cartas.innerHTML = ``
    for (let Inmueble of propiedades) {

        let nuevoinmueble = document.createElement("div")
        nuevoinmueble.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")

        nuevoinmueble.innerHTML = `<div class="card" style="width: 18rem">
    <img class="cuadrado" src="../assets/${foto}" alt="${nombre}">
<div class="card-body">
<h5 class="card-title">${nombre}</h5>
    <p class="card-text">${descripcion}</p>
    <button onclick="agregarproducto(${nombre})"  class="btn btn-primary">Agregar al carrito</button>
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




function agregarproducto(inmu) {



    const item = propiedades.find((Inmueble) => Inmueble.nombre === Inmueble.nombre)
    carrito.push(item)
    mostrarcarrito()
}

mostrarinmuebles()


const mostrarcarrito = () => {

    const modalbody = document.querySelector('.modal .modal-body')

    carrito.forEach((Inmueble) => {


        modalbody.innerHTML = `
    <div class= "modal-contenedor">
    <div>
    <img class="img-fluid img-carrito" src="../assets/${Inmueble.foto}"/>
    </div>
    <p>Producto: ${Inmueble.nombre}<p>
    <p>ubicacion: ${Inmueble.ubicacion}<p>
    <p>ambientes: ${Inmueble.ambientes}<p>
    <p>precio: ${Inmueble.precio}<p>
    <p>propiedad: ${Inmueble.propiedad}<p>
    <p>descripcion: ${Inmueble.descripcion}<p>
    <button class="btn btn-danger" >Eliminar producto </button>
    </div>
    `
    })

}

