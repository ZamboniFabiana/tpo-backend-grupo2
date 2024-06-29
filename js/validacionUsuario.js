function verificarUsuario() {
    //     //     <script>
    const URL = "http://127.0.0.1:5000/"
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let claveUsuario = document.getElementById("claveUsuario").value;
    fetch(URL + 'usuarios')
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Error al obtener usuarios')
            }
        })
        .then(function (data) {
            for (let usuario of data) {
                if (nombreUsuario === usuario.nombreUsuario && claveUsuario === usuario.claveUsuario) {
                    window.location.href = "index_.html";
                    return true;
                }else{
                    alert("Usuario desconocido o no tiene permiso de administrador")
                    window.location.href = "index.html";
                }
            }
        })
    
}
function borrarFormularioUsuario() {
    const form = document.getElementById('formulario');
    form.reset();
}
