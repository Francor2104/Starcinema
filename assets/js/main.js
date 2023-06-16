let main = document.getElementById('main');

checkPrecio();

function checkPrecio(){
if (localStorage.getItem("Precio") >= 1){
}
else{
localStorage.setItem("Precio", 0)
}
}

const modal = document.getElementById('modalAsientos');

function setPrecio(){
    this.precio = prompt('Introduzca el precio del boleto ($)');
    if(this.precio >= 1){
    localStorage.setItem("Precio",this.precio)
    }
    else{
        alert('introdujo un dato invalido, por favor corrija el valor del boleto');
        setPrecio();
    }
} 

    let titulo = document.querySelector('.movie-title');
    let titulopeli = titulo.textContent;
    
    let infoboleto = document.getElementById('formboleto');
    infoboleto.addEventListener("submit", compraB);

function compraB(event) {
    event.preventDefault();
    let boletos = document.getElementById('numero').value;
    localStorage.setItem("Boleto", boletos);
    checkPrecio();
    if(localStorage.getItem('Precio')  < 1){
        alert('No ha ingresado un precio para el boleto');
        window.location.href = 'index.html';
    }
    else{
    window.location.href = 'butaca.html';  
    }
}
    
function factura(data) {
    localStorage.setItem("Pelicula", titulopeli);
    localStorage.setItem("Fecha", data);
    $(modal).modal('show');
}