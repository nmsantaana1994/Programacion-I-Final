'use strict';

var totalCarrito = 0;
var totalPrecio = 0;
var spanTotalCarrito = null;
var spanTotalPrecio = null;
var divPrincipal = null;
var modalBodyCarrito = null;
var carrito = [];
var productos = null;
var modalTarget = null;

//Filtros del ecommerce
const filtros = [
    "Todos",
    "Llantas",
    "Cuadros",
    "Horquillas",
    "Mazas",
    "Platos",
    "Bicicletas",
]

/*
*  Santa Ana Nicolás
*/

document.addEventListener("DOMContentLoaded", () => {
    
    //Array de Objetos para los productos del ecommerce
    productos = [
        new Producto( 1, 'Llanta Primo VSXL+', 'Basada en la popular llanta VS de Primo, la VSXL+ es su contraparte más ancha. Fabricada en aluminio 6061-T6, la llanta VSXL+ cuenta con un diseño de encaje cruzado para una mayor resistencia y rigidez. Con 38 mm de ancho, la llanta VSXL+ es un 12% más ancha que la VS, lo que le permite mantener el perfil correcto de los tamaños de neumáticos modernos.', 24480, 'imagenes/productos/aros/aro_primo.jpg', 'Llantas'),
        
        new Producto( 2, 'Cuadro Federal Perrin', 'El cuadro Perrin de Federal es un cuadro de BMX de freestyle de alto rendimiento, y está hecho de acero cromado duradero y súper sólido. Gracias a su parte trasera corta, el Perrin es ideal para los riders técnicos que buscan capacidad de respuesta.', 88000, 'imagenes/productos/cuadros/cuadro_federal.jpg', 'Cuadros'),
        
        new Producto( 3, 'Horquilla Primo Pro HD', 'La Horquilla Pro HD presenta la misma geometría que la popular horquilla Strand con la nueva tecnología de fundición de inversión duradera. Construida en Cromo 4130 para una extrema duración.', 41760, 'imagenes/productos/horquillas/horquilla_primo.jpg', 'Horquillas'),
        
        new Producto( 4, 'Maza Eighties Holy Driver', 'Maza Eighties modelo Holy Driver de 36 agujeros con driver de 9 dientes. Es Freecoaster color negro para lado derecho.', 35360, 'imagenes/productos/mazas/maza_eighties.jpg', 'Mazas'),
        
        new Producto( 5, 'Plato Primo Griffin Guard', 'El plato Primo BMX Griffin es uno de los nuevos modelos de Primo BMX. Diseñado y mecanizado en el mejor Aluminio 7075. Con un formato sólido que incluye Guard integrado, para protección de sus dientes y transmisión en trucos arriesgados. Por todo esto se convierte en uno de los platos de BMX Freestyle más resistentes y fuertes del mundo, que te acompañará por años.', 22560, 'imagenes/productos/platos/plato_primo.jpg', 'Platos'),
        
        new Producto( 6, 'Bicicleta Cult Control', 'La Cult Control es una BMX de gama media. La Control tiene un cuadro con tubo superior de 20.75" hecho con un triángulo delantero 100% de cromo, horquillas y barras de cromo. Se ha montado con piezas sólidas de calidad del mercado de accesorios, buje trasero de cassette de 9t sellado, juego de dirección sellado, bielas de cromo con BB medio sellado, neumáticos de 2,4" Cult X Vans neumáticos, freno trasero 990 U-Brake, potencia forjada Salvation y mucho más.', 142400, 'imagenes/productos/bicis/cult_control.png', 'Bicicletas'),

        new Producto(7, 'Bicicleta Cult Gateway', 'La bicicleta Gateway de Cult es la base de la linea, ideal para principiantes y con un diseño caracteristico de la marca.  Bike Check: Cuadro: Triangulo frontal TT Cromo - 20.5" Puños: Ricany x ODI Grips Stem: Top Load  Juego de dirección: Integrado Pedales: CULT Nylon Palancas: CROMO 3 pc 170mm Heat Treated Caja: Sealed Mid Bottom Bracket Cadenas: CULT 410 Maza Delantera: Sealed Front Hub Maza Trasera: Sealed Rear 9T Cassette Hub Engranaje: 25T Member style Sprocket Asientos: 1pc Padded Seat w/ CULT logo Cubiertas: 2.40 SLICK Tires Frenos: 990 U-Brake Colores: Black Frame w/ ALL Black Parts - Chrome Frame w/ ALL Black Parts', 138600, 'imagenes/productos/bicis/cult_gateway.jpg', 'Bicicletas'),

        new Producto (8, 'Bicicleta DRB Highway', 'HIGHWAY es una de las grandes novedades para 2022, este modelo de DRB Bikes es una gran opción para principiantes en BMX. Con calidad y el mejor costo y beneficio del mercado. La geometría de este modelo es adecuada a los estándares mundiales de Bmx. Los componentes son fáciles de reemplazar, lo que permite actualizaciones a piezas profesionales. Como dirección integrada, mov MID central, tija de sillín 25.4 ", mesa Ahead-Set (over) etc; el Frame tiene refuerzos en el tubo superior e inferior dando mayor resistencia; Ratio de 25 (corona) 9 (cog), Neumáticos 2.35" con un perfil ancho, reforzado y resistente', 107100, 'imagenes/productos/bicis/drb_highway.jpg', 'Bicicletas'),

        new Producto (9, 'Cuadro Cult Ricany', 'El cuadro Cult Shory, signature de Sean Ricany esta construido en cromo 4130 con TT conico y DT reforzados, clamp integrado, frente integrado y caja MID. Tratado termicamente, tetones removibles. Geometría: Angulo Headtube: 75,5 ° Angulo Seattube: 70 ° Longitud final trasera: 13" -13.325 Altura BB: 11.7" Standover Altura: 8,75" Tamaño Dropout: 14 mm Tipo BB: Mid Soportes de freno: extraíble Peso: 2.32 Kg.', 95200, 'imagenes/productos/cuadros/cuadro_cult.jpg', 'Cuadros'),

        new Producto (10, 'Cuadro Stranger RPG', 'El cuadro Crux V2 de Stranger presenta un nuevo extremo trasero más corto que su predecesor y tensores de cadena integrados, al tiempo que mantiene el mismo tubo de cromo 4130 probado y los métodos de construcción utilizados en el cuadro Crux original, y cuenta con fuelles en los tubos superior e inferior, abrazadera de sillín integrada y punteras gruesas de 5 mm, manteniendo el precio bajo sin sacrificar la resistencia.', 94860, 'imagenes/productos/cuadros/cuadro_stranger.jpg', 'Cuadros'),

        new Producto (11, 'Maza WTP Arrow', 'La maza trasera Arrow de WTP esta construida en aluminio 6061-T6 mecanizada en CNC. Cuenta con tres rulemanes sellados internamente para tener un sistema de rodamientos de calidad, eje female de cromo y bulones de cromo especiales patentados por WTP. La Arrow cuenta con el sistema SDS lo cual le permite ser utilazada tanto del lado izquierdo o derecho, tiene un peso de 409 gr.', 48600, 'imagenes/productos/mazas/maza_wtp.jpg', 'Mazas'),

        new Producto (12, 'Maza Animal Javelin', 'La JAVELIN de Animal tiene 36 agujeros y CNC de aluminio 7075, la carcasa de la maza tiene una brida del lado más pequeño para una mejor protección. El driver de Cromo de 9 dientes de una pieza utiliza dos casquillos de polímero, en lugar de un juego de trabas comunes, para una mayor duración. El eje de Cromo de 14 mm es hueco y cuenta con un ajuste allen de 8 mm y tuercas de eje de aluminio 7075 del mismo color. Peso: 435gr.', 58140, 'imagenes/productos/mazas/maza_animal.jpg', 'Mazas'),

        new Producto (13, 'Llante Stranger Crux XL', 'Tremendo Aro de Llanta para BMX Freestyle de alto nivel. A nuestro criterio se encuentra en el podio de los mejores del mundo. Ya que combina: Extrema Resistencia, Excelente acabado de pintura Negro Mate, El Formato consagrado de Doble Pared y lo que más atrae de este producto su tremendo ancho de casi 43MM.', 13700, 'imagenes/productos/aros/aro_stranger.jpg', 'Llantas'),

        new Producto (14, 'Llanta Cult Match V2', 'Un modelo de nivel extremo, con una resistencia suprema, que permite todo tipo de uso y exigencia para BMX Freestyle. Construido en el mejor Aluminio de aleación 6061-T6. Con una estructura de Doble pared. Reforzada a su vez de manera interna con dos columnas en la zona central, dandole una solida e inamovible construcción. Cuenta además con un excelente ancho de 34mm, que permite equipar la gran variedad de cubiertas modernas de BMX Freestyle de hoy en dia, que vienen bien anchas. Otro punto fuerte a destacar , que solo muy pocos aros de BMX lo poseen, es que la unión del aro, es soldada, "Welded". Lo que asegura la mejor y más fuerte unión que un aro podria tener.', 19080, 'imagenes/productos/aros/aro_cult.jpg', 'Llantas'),

        new Producto (15, 'Plato SyM X-Man Guard', 'El engranaje X-MAN de S&M está construido en aluminio 7075 T6, mecanizado en 3D y cuenta con el logotipo de S&M grabado. Cubreplato ultra resistente. Viene con arandelas para ser adaptado a 19mm y 22mm. Disponible en color Pulido.', 25380, 'imagenes/productos/platos/plato_sym.jpg', 'Platos'),

        new Producto (16, 'Plato Animal V4 Guard', 'El engranaje V4 Full Guard de Animal, esta construido en aluminio 7075 mecanizado en CNC. Tiene dientes de 6.5mm de espesor, 6 recortes para alivianar el plato, un cubre ultra resistente y viene con todos los adaptadores. Peso de 171 gr. y disponible en color negro y 25/28D.', 23200, 'imagenes/productos/platos/plato_animal.jpg', 'Platos'),

        new Producto (17, 'Horquilla Salt Plus HQ', 'La horquilla HQ de Saltplus esta construida en una sola pieza de Cromo M2 hidroformada y hecha bajo tratamiento de calor. Tiene un off set de 26mm y un top bolt M24 de aluminio. Tiene un peso de 1047 gr. Disponible en color Negro.', 30600, 'imagenes/productos/horquillas/horquilla_salt.jpg', 'Horquillas'),

        new Producto (18, 'Horquilla Fit Shiv V3', 'La horquilla Fit Shiv V3, es la nueva versión de esta clásica horquilla de la marca. El objetivo de Fit era diseñar y producir una horquilla extremadamente fuerte con mucho espacio para las cubiertas. Está disponible con un offset de 25 mm. Las patas sin costura y estampadas proporcionan más resistencia que las tapas soldadas o fundidas y los extremos de estas patas están formados, no tapados ni soldados, por lo que no hay nada que se pueda fracturar.', 50400, 'imagenes/productos/horquillas/horquilla_fitbikeco.jpg', 'Horquillas')
    ];

    //Agarro los elementos que voy a necesitar para crear el resto de elementos HTML de manera dinámica
    divPrincipal = document.getElementById("cargaProductos");
    spanTotalCarrito = document.getElementById("total-carrito");
    spanTotalPrecio = document.getElementById("total-precio");
    modalBodyCarrito = document.getElementById("modal-body-carrito");
    
    //Evento que borra la foto anterior de la promo en caso de cerrar la modal para que no aparezca al filtrar de nuevo
    let modalPromo = document.getElementById("modal-promocion");
    modalPromo.addEventListener('hidden.bs.modal', function (event) {
        let modalPromocion = document.getElementById("modal-body-promocion");

        if (modalPromocion.firstElementChild) {
            modalPromocion.removeChild(modalPromocion.firstElementChild);
        }
    })
    
    totalPrecio = 0;
    totalCarrito = 0;

    ActualizarTotales();
    ActualizarModalCarrito();
    CargarFiltros();
    
    //Carga de productos a través de DOM
    productos.forEach(producto => CrearProducto(producto));

    //Evento que escucha si se hace clic al boton "Agregar al Carrito" desde la ventana modal de descripcion de producto
    let modalProductoBoton = document.querySelector(".btn-modal-producto");
    modalProductoBoton.addEventListener("click", (e) => {
        e.preventDefault();
        AgregarAlCarrito(modalTarget);
    });

    //Se borran todos los elementos del carrito
    let botonEliminar = document.querySelector(".btn-danger");
    botonEliminar.addEventListener("click", (e) => {
        modalBodyCarrito.innerHTML = "";
        carrito = [];
        let pVacio = document.createElement("p");
        pVacio.innerText = "No hay productos en el carrito";
        modalBodyCarrito.append(pVacio);
        
        totalPrecio = 0;
        totalCarrito = 0;

        ActualizarTotales();
    })
})

function AgregarAlCarrito(id) {
    let producto = productos.find(producto => producto.getID === id);
    if (producto) {
    
        let indexProducto = carrito.findIndex(itemProducto => itemProducto.producto.getID === id);

        if (indexProducto !== -1) {
            carrito[indexProducto].cantidad ++;

        } else {
            carrito.push({
                producto,
                cantidad: 1
            });
        }
        
        totalCarrito++;
        totalPrecio += producto.getPrecio;
        
        ActualizarTotales();
        ActualizarModalCarrito();
    }
}

function ActualizarTotales () {
    spanTotalCarrito.innerText = totalCarrito;
    spanTotalPrecio.innerText = totalPrecio;
}

function ActualizarModalCarrito() {
    modalBodyCarrito.innerHTML = "";
    
    if(carrito.length === 0) {
        let pVacio = document.createElement("p");
        pVacio.innerText = "No hay productos en el carrito";
        modalBodyCarrito.append(pVacio);
    } else {
        let ulProductos = document.createElement("ul");

        carrito.forEach((itemCarrito, index) => {
            let li = document.createElement("li");
            li.setAttribute("class", "d-flex align-items-center justify-content-between");
            let icono = document.createElement("i");
            icono.setAttribute("class", "material-icons icono-cart");
            icono.addEventListener("click", (e) => {
                EliminarProductoCarrito(index);
            })
            
            let spanNombre = document.createElement("span");
            let spanPrecio = document.createElement("span");

            icono.innerText = "cancel";
            spanNombre.innerText = itemCarrito.producto.getNombre;
            spanPrecio.innerText = itemCarrito.cantidad + " x $" + itemCarrito.producto.getPrecio;

            li.append(icono);
            li.append(spanNombre);
            li.append(spanPrecio);

            ulProductos.append(li);
        })

        let pTotal = document.createElement("p");
        let spanTotalText = document.createElement("span");
        let spanTotal = document.createElement("span");
        
        pTotal.setAttribute("class", "p-total-carrito d-flex align-items-center justify-content-between")
        spanTotalText.innerText = "Total:";
        spanTotal.innerText = "$" + totalPrecio;
        
        pTotal.append(spanTotalText);
        pTotal.append(spanTotal);

        
        modalBodyCarrito.append(ulProductos);
        modalBodyCarrito.append(pTotal);
    }
}

function EliminarProductoCarrito(index){
    
    if (carrito[index]){

        if (carrito[index].cantidad > 1){
            carrito[index].cantidad --;
            totalPrecio -= carrito[index].producto.getPrecio;
        } else {
            totalCarrito --;
            totalPrecio -= carrito[index].producto.getPrecio;
            carrito.splice(index, 1);
        }
        
        ActualizarTotales();
        ActualizarModalCarrito();
    }
}

function Promocion () {
    let modal = new bootstrap.Modal('#modal-promocion');
    
    let modalPromocion = document.getElementById('modal-body-promocion');
    let imgPromocion = document.createElement("img");

    let numeroPromo = Math.floor(Math.random() * 3) + 1;

    imgPromocion.setAttribute("src", "imagenes/promo/promo" + numeroPromo + ".jpg");
    imgPromocion.setAttribute("alt", "Promoción");

    modalPromocion.append(imgPromocion);

    modal.show();

    setTimeout(() => {
        modal.hide();
    }, 10000);

}

function FiltrarProductos(categoria) {
    divPrincipal.innerHTML = "";
    
    if(categoria === "Todos") {
        productos.forEach(producto => CrearProducto(producto));
        return;
    }

    let productosFiltrados = productos.filter(producto => producto.getCategoria === categoria);

    productosFiltrados.forEach(producto => CrearProducto(producto));
}

function CargarFiltros() {
    const filterMenu = document.getElementById("filter-dropdown-menu");
    filtros.forEach(filtro => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = filtro;
        a.setAttribute("class", "dropdown-item");
        a.setAttribute("href", "#");

        a.addEventListener("click", (e) => {
            e.preventDefault(); 
            FiltrarProductos(filtro);
            Promocion();
        })

        li.append(a);
        filterMenu.append(li);
    })
}

function CrearProducto (producto){
    let divColumna = document.createElement("div");
    let divCard = document.createElement("div");
    let imgCard = document.createElement("img");
    let divCardBody = document.createElement("div");
    let h3Titulo = document.createElement("h3");
    let spanPrecio = document.createElement("span");
    let pDescripcion = document.createElement("p");
    let pCategoria = document.createElement("p");
    let spanCategoria = document.createElement("span");
    let botonAgregar = document.createElement("a");
    
    divColumna.setAttribute("class", "col-12 col-lg-4 col-md-6 d-flex justify-content-center")
    divCard.setAttribute("id", producto.getID);
    divCard.setAttribute("class", "card");
    imgCard.src = producto.getImagen;
    imgCard.alt = producto.getNombre;
    imgCard.setAttribute("class", "card-img-top");
    divCardBody.setAttribute("class", "card-body");
    h3Titulo.setAttribute("class", "card-title h3 text-center");
    spanPrecio.setAttribute("class", "h5 precio");
    pDescripcion.setAttribute("class", "card-text");
    spanCategoria.setAttribute("class", "badge bg-info");
    botonAgregar.setAttribute("class", "btn btn-success d-block");
    botonAgregar.setAttribute("data-bs-toggle", "modal");
    botonAgregar.setAttribute("data-bs-target", "modal-producto")
    botonAgregar.setAttribute("href", "#");

    h3Titulo.innerText = producto.getNombre;
    spanPrecio.innerText = "Precio: $" + producto.getPrecio;
    pDescripcion.innerText = producto.getDescripcion;
    spanCategoria.innerText = "Categoría: " + producto.getCategoria;
    botonAgregar.innerText = "AGREGAR AL CARRITO";

    divCard.addEventListener("click", (e) => {
        if(e.target.classList.contains('btn')) {
            return false;
        };
        AbrirModalProducto(producto.getID);
    });
    
    botonAgregar.addEventListener("click", (e) => {
        e.preventDefault();
        AgregarAlCarrito(producto.getID);
    });
    
    pCategoria.append(spanCategoria);
        
    divCardBody.append(pDescripcion);
    divCardBody.append(spanPrecio)
    divCardBody.append(pCategoria);
    divCardBody.append(botonAgregar);
        
    divCard.append(h3Titulo);
    divCard.append(imgCard);
    divCard.append(divCardBody);

    divColumna.append(divCard);
        
    divPrincipal.append(divColumna);
}

function AbrirModalProducto(id) {
    let producto = productos.find(producto => producto.getID === id);
    if(producto) {
        modalTarget = id;
        let modalProductoLabel = document.querySelector(".modal-producto-label");
        let modalProductoImg = document.querySelector(".img-modal-producto");
        let modalProductoP = document.querySelector(".modal-producto-parrafo");
        let modalProductoCategoria = document.querySelector(".categoria-modal-carrito");
        let modalProductoPrecio = document.querySelector(".precio-modal-carrito");

        modalProductoLabel.innerText = producto.getNombre;
        modalProductoImg.src = producto.getImagen;
        modalProductoP.innerText = producto.getDescripcion;
        modalProductoCategoria.innerText = "Categoria: " + producto.getCategoria;
        modalProductoPrecio.innerText = "$" + producto.getPrecio;
        
        let modal = new bootstrap.Modal('#modal-producto');
        modal.show();
    }
}