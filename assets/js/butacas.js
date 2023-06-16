function seleccionarAsiento(id) {

    var asiento = document.getElementById(id);
    var seleccionados = document.querySelectorAll('.asiento-seleccionado').length;
    

    //remover asiento
    if (asiento.classList.contains('asiento-seleccionado')) {
      asiento.classList.remove('asiento-seleccionado');
    } 
    // Marcar Asiento
    else if (seleccionados < localStorage.getItem('Boleto')) {
      asiento.classList.add('asiento-seleccionado');
    }
    // Limite de asientos
    else{
        alert('Ha excedido el número máximo de asientos!')
    }

    // Función que verifica si ya todos los boletos fueron consumidos para aparecer el botón
    checkboton();
  }

  function checkboton(){
    //Verificar cantidad de elegidos
    var seleccionados = document.querySelectorAll('.asiento-seleccionado').length;

    //Chequeo de boletos
  if (seleccionados == localStorage.getItem('Boleto')) {
    document.getElementById('confirmar-asientos').style.display = 'block';
  } else {
    document.getElementById('confirmar-asientos').style.display = 'none';
  }
  }


  const modalC = document.getElementById('modalCompra');
  document.getElementById('confirmar-asientos').addEventListener('click', boletos);
  
  function boletos(){
    var seleccionados = document.querySelectorAll('.asiento-seleccionado');
    var asientosSeleccionados = '';
    for (var i = 0; i < seleccionados.length; i++) {
      asientosSeleccionados += seleccionados[i].id + '. ';
    }
    
    localStorage.setItem('Asientos', asientosSeleccionados);
    $(modalC).modal('show');
    
  };

  let infocompra = document.getElementById('formcompra');
  infocompra.addEventListener("submit", fincompra);

  function fincompra(event){
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let cedula = document.getElementById('cedula').value;
    let tlf = document.getElementById('tlf').value;
    let email = document.getElementById('email').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('cedula', cedula);
    localStorage.setItem('tlf', tlf);
    localStorage.setItem('email', email);

    window.location.href = 'factura.html'
  }