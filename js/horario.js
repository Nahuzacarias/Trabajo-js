
const Datetime = luxon.DateTime
let hora = document.getElementById("hora")


setInterval(() => {
    const fecha = Datetime.local() 
    let fecha1= fecha.toLocaleString(Datetime.DATETIME_MED)
    hora.innerHTML=`<div>${fecha1} </div> ` 
}, 1000);