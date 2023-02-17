
const Datetime = luxon.DateTime
const fecha = Datetime.fromISO("2017-05-15") 

let hora = document.getElementById("hora")


setInterval(() => {
    const fechahoy = Datetime.now()
    let fecha2= fechahoy.toLocaleString(Datetime.TIME_24_WITH_SECONDS)
    hora.innerHTML=`${fecha2}`
}, 1000);