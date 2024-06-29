
//  Función para mostrar sólo cels marca Motorola
function mostrarMoto() {
    document.getElementById("samsung").style.display = "none";
    document.getElementById("xiao").style.display = "none";
    document.getElementById("moto").style.display = "grid";
  }


//  Función para mostrar sólo cels marca Samsung 
  function mostrarSamsung() {
    document.getElementById("moto").style.display = "none";
    document.getElementById("xiao").style.display = "none";
    document.getElementById("samsung").style.display = "grid";
  }

  //  Función para mostrar sólo cels marca Xiaomi
  function mostrarXiao() {
    document.getElementById("samsung").style.display = "none";
    document.getElementById("moto").style.display = "none";
    document.getElementById("xiao").style.display = "grid";
  }

  //  Función para mostrar todos los cels 
  function mostrarTodos() {
    document.getElementById("samsung").style.display = "grid";
    document.getElementById("xiao").style.display = "grid";
    document.getElementById("moto").style.display = "grid";
  }