
const Datetime = luxon.DateTime
let hora = document.getElementById("hora")


setInterval(() => {
    const fecha = Datetime.local() 
    let fecha1= fecha.toLocaleString(Datetime.DATETIME_MED)
    const horahoy = Datetime.now()
    let hora1= horahoy.toLocaleString(Datetime.TIME_24_WITH_SECONDS)
    hora.innerHTML=`${hora1}<div>${fecha1} </div> ` 
}, 1000);