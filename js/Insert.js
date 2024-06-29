//Inserta Header y Footer
let header = `
            <div class="panel-sup">
            
                <div class="logo"><img src="img/Power-Phone-bkg.png" alt="logo">
                </div>

                <div class="barrabusqueda">
                    <img src="img/lupa-de-busqueda.png" width="15px" onclick="enfocarBusqueda()"></img>
                    <input type="text" id="searchInput" placeholder="Buscar un producto...">
                </div>
             
                <div class="carrito">
                    <a href="#" class="usuario"><img src="img/usuario.png" width="20px"></a>
                    <a href=#><img src="img/carrito-de-compras.png" width="20px"></a>
                    <h6 id="cantProducto">0</h6>
                </div>
                
            </div>
            
        <nav>
                <input type ="checkbox" id="check">
                <label for ="check" class="checkbtn">
                    <img src="img/burger.png" id="burger" alt="hamburguesa" width="30">
                </label>
        
                <ul class="navegador">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="novedades.html">Novedades</a></li>
                    <li><a href="catalogo.html">Catalogo</a></li>
                    <li><a href="formulario.html">Contactanos</a></li>
                    <li><a href="sobrenos.html">Nosotros</a></li>
                    <li><a href="usuarios.html">Administrador</a></li>
                </ul>
        </nav>

`;
document.getElementById("idheader").innerHTML = header;

let footer = `
            <div class="pie">
                <h5>Nuestras Redes:</h5>
                
                <a href="https://www.facebook.com/" target="_blank"><img src="img/facebook.png" alt="" class="imagen" width="25px"></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="img/instagram.png" alt="" class="imagen" width="25px"></a>
                <a href="https://www.whatsapp.com/" target="_blank"><img src="img/whatsapp.png" alt="" class="imagen" width="25px"></a>
            </div>
`;
document.getElementById("idfooter").innerHTML = footer;

