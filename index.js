window.onload=function(){
    let formulario = document.forms[0];
    //agregar manejador de evento para el formulario
    if(document.addEventListener){
      formulario.addEventListener("submit", validarFormulario);
    }
    else if(document.attachEvent){
      formulario.attachEvent("onsubmit", validarFormulario);
    }
  }
  function validarFormulario(event){
    
    event.preventDefault();
    
    //acceder al codigo de cliente
    let codigo_cliente = document.getElementById('codigo_cliente');
    if(!codigoCliente(codigo_cliente.value)){
      alert("Codigo invalido\n Favor ponga los datos como se piden");
      return false; //Código del cliente no válida
    }
  
    //acceder a input email
    let inputEmail = document.getElementById('email');
    if(!validarEmail(inputEmail.value)){
      alert("Email no valido\n Favor ponga los datos como se piden");
      return false; //dirección de correo no válida
    }
  
    //acceder a número de factura
    let numFactura = document.getElementById('numFactura');
    if(!factura(numFactura.value)){
      alert("factura no valido \n Favor ponga los datos como se piden");
      return false; //Número de factura no válida
    }
  
    //validar monto a pagar, solo aceptar valores en coma flotate,
    //por ejemplo: 133.30 o 1020.15
    //acceder a monto a pagar
    let monto_pago = document.getElementById('monto_pago');
     if(!validarMontoPagar(monto_pago.value)){
      alert("Monto a pagar no valido\n Favor ponga los datos como se piden");
      return false; //Número de factura no válida
    }
  
    //validar tarjeta de crédito
    //formato valido es 3333-3333-3333-33333
    //16 digitos en grupos de 4 separados por guión
    //acceder a número de tarjeta
    let numero_tarjeta = document.getElementById('numero_tarjeta');
      if(!validarTarjeta(numero_tarjeta.value)){
      alert("Número de tarjeta no valido\n Favor ponga los datos como se piden");
      return false; //Número de factura no válida
    }
  
  
    //validar nombre tarjeta habiente, no debe ser vacío
    var tarjetaHabiente = document.getElementById("tarjetahabiente");
    if(tarjetaHabiente.value === ''){
      alert("Necesita el nombre del titular de la tarejta\n Favor ponga los datos como se piden");
      return false; //Número de tarjeta
    }
  
    //validar fecha de experición de tarjeta
    //formato es mm-aa (dos digitos para mes, guión, dos digitos para año)
    //por ejemplo: 09-18
  
    let fechaexp = document.getElementById('fechaexp');
    //validar fecha de experición de tarjeta
    if(!fechaExp(fechaexp.value)){
      alert("Fecha de expiración de tarjeta no valido\n Favor ponga los datos como se piden");
      return false; //Fecha de experición de tarjeta
    }
  
    //Si todo fue validado, retornar true
    alert("Pago Exitoso");
    return true;
    }
      function getTarget(e){
        var target;
        if(e.target)
          target = e.target;
        else if(e.srcElement)
          target = e.srcElement;
        if(target.nodeType==3) //safari
          target = target.parentNode;
  
        return target;
      }
      //Email
      function validarEmail(email){
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
        return re.test(email);
      }
      //codigo cliente
      function codigoCliente(codigo){
        var re = /[0-9]{3}-[0-9]{3}/;
        return re.test(codigo);
      }
  
      // Facturar
      function factura(factura){
        var re = /[0-9]-[0-9]{3}/;
        return re.test(factura);
      }
      //Validación 
      function validarMontoPagar(monto){
        return !!(monto % 1);
      }
  
      function validarTarjeta(tarjeta){
        var re = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
        return re.test(tarjeta);
      }
      //vencimiento
      function fechaExp(fecha){
        var re = /[0-9]{2}-[0-9]{2}/;
        return re.test(fecha) 
          
  
    // return true;
  }