/*MODO OSCURO*/

let botondark2 = document.getElementById("dark")
let botonlight2 = document.getElementById("light")
let modoOscuro = JSON.parse(localStorage.getItem("modoOscuro"))


const botonswitch = document.getElementById("switch");
botonswitch.addEventListener("click", () => {

    document.body.classList.toggle("dark");
    botonswitch.classList.toggle("active");
    localStorage.setItem("active", JSON.stringify(true))
    localStorage.setItem("dark", JSON.stringify(false))
});