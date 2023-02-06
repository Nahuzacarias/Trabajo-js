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

let cartas = document.getElementById("carta");
let ocultartienda = document.getElementById("ocultartienda3")

ocultartienda.addEventListener("click", ocultartienda2)
let mostrartienda = document.getElementById("mostrartienda3")


let botondark2 = document.getElementById("dark")
let botonlight2 = document.getElementById("light")

function mostrarinmuebles() {
    cartas.innerHTML = ``
    for (let Inmueble of propiedades) {

        let nuevoinmueble = document.createElement("div")
        nuevoinmueble.classList.add("col-12", "col-md-6", "col-lg-4", "my-3")

        nuevoinmueble.innerHTML = `<div class="card" style="width: 18rem">
    <img class="cuadrado" src="../assets/${Inmueble.foto}" alt="${Inmueble.nombre}">
<div class="card-body">
<h5 class="card-title">${Inmueble.nombre}</h5>
    <p class="card-text">${Inmueble.descripcion}</p>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
</div>`;

        cartas.appendChild(nuevoinmueble)

    }
}

mostrarinmuebles()


function ocultartienda2() {

    cartas.innerHTML = ``
}


mostrartienda.onclick = () => {

    mostrarinmuebles()
}

let modoOscuro = JSON.parse (localStorage.getItem("modoOscuro"))

if (modoOscuro == "true") {
    document.body.classList.add("botondark")
}
else {
    document.body.classList.remove("botondark")


}

botondark2.addEventListener("click", () => {
    document.body.classList.add("botondark")
    localStorage.setItem("modoOscuro",JSON.stringify (true))
})

botonlight2.addEventListener("click", () => {
    document.body.classList.remove("botondark")
    localStorage.setItem("modoOscuro", JSON.stringify (false))
})

