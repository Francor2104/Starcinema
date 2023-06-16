let nombre:string = localStorage.getItem('nombre') + " " + localStorage.getItem('apellido');
let cedula:any = localStorage.getItem('cedula');
let telefono:any = localStorage.getItem('tlf');
let email:any = localStorage.getItem('email');
let funcion:string = localStorage.getItem('Pelicula');
let boleto:number = localStorage.getItem('Boleto');
let precioB:number = localStorage.getItem('Precio');
let fecha:string = localStorage.getItem('Fecha');
let asientos:string = localStorage.getItem('Asientos');

let Pboleto:number = parseFloat(boleto);
let Pentrada:number = parseFloat(precioB);

let costo:number = (Pboleto * Pentrada);

let Nombre:string = document.getElementById('Nombre');
Nombre.innerHTML = `<p>Nombre: ${nombre}<p>`;

let Cedula:any = document.getElementById('Cedula');
Cedula.innerHTML = `<p>Cedula: ${cedula}<p>`;

let Telefono:number = document.getElementById('Teléfono');
Telefono.innerHTML = `Teléfono: ${telefono}`;

let Correo:any = document.getElementById('correo');
Correo.innerHTML = `Correo: ${email}`;

let Funcion:string = document.getElementById('Función');
Funcion.innerHTML = `Función: ${funcion}`;

let Dia:any = document.getElementById('hora');
Dia.innerHTML = `Fecha y Sala de la función: ${fecha}`;

let PrecioT:number = document.getElementById('precio');
PrecioT.innerHTML = `Compró: ${boleto} boletos x ${precioB}$`;

let Asientos:string = document.getElementById('butacas');
Asientos.innerHTML = `Asientos elegidos: ${asientos}`;

let Costo:number = document.getElementById('precioT');
Costo.innerHTML = `Precio a pagar: ${costo}$`;

