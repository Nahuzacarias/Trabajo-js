/*MODO OSCURO*/

let modooscuro =localStorage.getItem("guardarmodo")


let botondark2 = document.getElementById("dark1")
let botonlight2 = document.getElementById("light")
const dark2 = document.getElementById("modal2");
const botonswitch = document.getElementById("switch");

let guardarmodo = localStorage.getItem("active")

botonswitch.addEventListener("click", () => {

    document.body.classList.toggle("dark1");
    botonswitch.classList.toggle("active");
    dark2.classList.toggle("dark2")
    
    
    if (document.body.classList.contains("dark1")) {
		localStorage.setItem("guardarmodo", JSON.stringify("off"));




    
	} else {
		localStorage.setItem("guardarmodo", JSON.stringify("on"));
    document.body.classList.toggle.remove("dark1");
	}
});



