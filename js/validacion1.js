
function verificarDatos() {
    // guardamos los datos en las variables
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let edad = document.getElementById("edad").value;
    let sexo = document.getElementById("sexo").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    let email = document.getElementById("email").value;
    let comentario = document.getElementById("comentario").value;

    //verificamos que todos los datos estén completos
    if (nombre === "" || apellido === "" || fechaNacimiento === "" || edad === "" || sexo === "" || tipoDocumento === "" || numeroDocumento === "" || email === "" || comentario === "") {
        alert("los datos no están completos");
        document.getElementById("divConfirmacion").style.visibility = "hidden";//el mensajae de confirmación está oculto
        return;
    } else {
        // alert("Datos enviados");
        //mostramos los datos recibidos por el formulario.
        document.getElementById("formulario").style.display = "none"; // escondemos el formulario
        document.getElementById("divConfirmacion").style.visibility = "visible";//mostramos el mensajae de confirmación
        document.getElementById("mostrarNombre").textContent = "Nombre: "+document.getElementById("nombre").value.toUpperCase();
        document.getElementById("mostrarApellido").textContent = "Apellido: " + document.getElementById("apellido").value.toUpperCase();
        document.getElementById("mostrarFechaNacimiento").textContent = "Fehca de nacimiento: " + document.getElementById("fechaNacimiento").value;
        document.getElementById("mostrarEdad").textContent = "Edad: " + document.getElementById("edad").value;
        document.getElementById("mostrarSexo").textContent = "Sexo: " + mostrarSexo().toUpperCase();
        document.getElementById("mostrarTipoDocumento").textContent = "Tipo de documento: " + document.getElementById("tipoDocumento").value.toUpperCase();
        document.getElementById("mostrarNumeroDocumento").textContent = "Número de documento: " + document.getElementById("numeroDocumento").value;
        document.getElementById("mostrarEmail").textContent = "Email: " + document.getElementById("email").value;
        document.getElementById("mostrarComentario").textContent = "Comentario: " + document.getElementById("comentario").value.toUpperCase();
        document.getElementById("mostrarArchivo").textContent = "Nombre Archivo Adjunto: " + document.getElementById("archivo").value;

    }
}

function borrarFormulario() {
    //limpiamos todos lo elementos del formulario y restablecemos el formulario, incluyendo el campo de archivo
    const form = document.getElementById('formulario');   
    form.reset();

    alert("Datos borrados")
    document.getElementById("divConfirmacion").style.visibility = "hidden";
}

window.onload = function () {
    // cuando carga la ventana el mensaje de confirmación se carga oculto.
    document.getElementById("divConfirmacion").style.visibility = "hidden";
}

function validarNombre (){
    let texto = document.getElementById("nombre").value;
    let etiqueta = document.getElementById("etiquetaNombre");
    // expresión regular para verificar si la cadena tiene números
    let reget = /\d/;
    if (reget.test(texto)){
        etiqueta.innerText = "Ingrese el texto sin números";
        etiqueta.style.color = "red";
        document.getElementById("nombre").value = "";
        document.getElementById("nombre").focus();    
    }else{
        etiqueta.innerText = "Nombre: *";
        etiqueta.style.color = "black";
    }   
} 

function validarApellido (){
    let texto = document.getElementById("apellido").value;
    let etiqueta = document.getElementById("etiquetaApellido");
    // expresión regular para verificar si la cadena tiene números
    let reget = /\d/;
    if (reget.test(texto)){
        etiqueta.innerText = "Ingrese el texto sin números";
        etiqueta.style.color = "red";
        document.getElementById("apellido").value = "";
        document.getElementById("apellido").focus();    
    }else{
        etiqueta.innerText = "Apellido: *";
        etiqueta.style.color = "black";
    }
}

// esta función valida que la fecha de nacimiento no sea mayor a la fecha actual
function validarFechaNacimiento (){
    let fecha = document.getElementById("fechaNacimiento").value;
    let fechaNacimiento = new Date(fecha);
    let etiqueta = document.getElementById("etiquetaFechaNacimiento");
    // Obtener la fecha actual
    let fechaActual = new Date();

    // Comparar la fecha de nacimiento con la fecha actual
    if (fechaNacimiento > fechaActual) {
        //alert("");
        etiqueta.innerText = "La fecha de nacimiento no puede ser mayor que la fecha actual.";
        etiqueta.style.color = "red";
        document.getElementById("fechaNacimiento").value = "";
        document.getElementById("fechaNacimiento").focus();
    } else {
        etiqueta.innerText = "Fecha de Nacimiento";
        etiqueta.style.color = "black";
    }
}

//esta función valida que la edad ingresada sea correcta según su fecha de nacimiento
function validarEdad(){
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let edad = parseInt(document.getElementById("edad").value);
    let etiqueta = document.getElementById("etiquetaEdad");
    // transformo la fecha nacimiento en un objeeto date
    let fechaNacimientoDate = new Date(fechaNacimiento);
    let fechaActual = new Date();

    // Calcular la edad a partir de la fecha de nacimiento
    let edadCalculada = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
    // Verificar si la edad ingresada coincide con la edad calculada
    if (edad == edadCalculada) {
        //alert("La fecha de nacimiento y la edad coinciden.");
        etiqueta.innerText = "Edad";
        etiqueta.style.color = "black";

    } else {
        //alert("La fecha de nacimiento y la edad no coinciden.");
        etiqueta.innerText = "Edad Incorrecta.";
        etiqueta.style.color = "red";
    }
}

function mostrarSexo() {
    var opciones = document.getElementsByName("sexo");
    var seleccionado = "";
  for (var i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        seleccionado = opciones[i].value;
        break;
      }
    }
  //   alert("Selección: " + seleccionado);
  return seleccionado;
  }

// función que asegura que se ingrese 8 números si o si
function validarNumeroDocumento (){
    let texto = document.getElementById("numeroDocumento").value;
    let etiqueta = document.getElementById("etiquetaNumeroDocumento");
    // expresión regular para verificar si la cadena 8 números
    let reget = /^\d{8}$/;
    if (reget.test(texto)){
        etiqueta.innerText = "DNI: *";
        etiqueta.style.color = "black";
    }else{
        etiqueta.innerText = "Ingrese sólo 8 digitos";
        etiqueta.style.color = "red";
        document.getElementById("numeroDocumento").value = "";
        document.getElementById("numeroDocumento").focus();    
        
    }
}

// asegura que la dirección de correo ingresada tenga un caracter arroba y un punto
function validarEmail (){
    let texto = document.getElementById("email").value;
    let etiqueta = document.getElementById("etiquetaEmail");
    // expresión regular para verificar si la cadena 8 números
    let reget = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (reget.test(texto)){
        etiqueta.innerText = "Email: *";
        etiqueta.style.color = "black";
    }else{
        etiqueta.innerText = "Ingrese una dirección válida";
        etiqueta.style.color = "red";
        document.getElementById("email").value = "";
        document.getElementById("email").focus();    
    }
}

// función que asegura que el comentario no se encuentre vacío
function validarComentario (){
    let texto = document.getElementById("comentario");
    let comentario = texto.value.trim()
    let etiqueta = document.getElementById("etiquetaComentario");
    // expresión regular para verificar si la cadena tiene números
    if (comentario == ""){
        etiqueta.innerText = "Ingrese un comentario";
        etiqueta.style.color = "red";
        document.getElementById("comentario").value = "";
        document.getElementById("comentario").focus();    
    }else{
        etiqueta.innerText = "Comentario: *";
        etiqueta.style.color = "black";
    }
}

function irAlIndex() {
    window.location.href = "index.html";
  }


