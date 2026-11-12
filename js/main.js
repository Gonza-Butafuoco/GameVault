'use strict'

const datos = {
    "juegos": [
        {
            "id": "elden-ring",
            "titulo": "Elden Ring",
            "genero": "RPG",
            "descripcion": "Explorá un enorme mundo de fantasía lleno de secretos, enemigos y desafíos.",
            "imagen": {
                "src": "./img/imagen-eldenRing.jpg",
                "alt": "Portada Elden Ring"
            }
        },
        {
            "id": "cyberpunk-2077",
            "titulo": "Cyberpunk 2077",
            "genero": "RPG",
            "descripcion": "Sumergite en Night City y descubrí un futuro dominado por tecnología, poder y decisiones.",
            "imagen": {
                "src": "./img/imagen-cyberpunk.jpg",
                "alt": "Portada Cyberpunk 2077"
            }
        },
        {
            "id": "rdr2",
            "titulo": "Red Dead Redemption 2",
            "genero": "Aventura",
            "descripcion": "Viví una historia épica ambientada durante los últimos días del viejo oeste.",
            "imagen": {
                "src": "./img/imagen-rdr2.jpg",
                "alt": "Portada Red Dead Redemption 2"
            }
        },
        {
            "id": "forza-horizon-5",
            "titulo": "Forza Horizon 5",
            "genero": "Carreras",
            "descripcion": "Disfrutá de un mundo abierto lleno de carreras, desafíos y paisajes impresionantes.",
            "imagen": {
                "src": "./img/imagen-forza5.jpg",
                "alt": "Portada Forza Horizon 5"
            }
        },
        {
            "id": "horizon-zero-dawn",
            "titulo": "Horizon Zero Dawn",
            "genero": "Aventura",
            "descripcion": "Embárcate en un viaje épico a través de un mundo post-apocalíptico lleno de misterios y criaturas mecánicas.",
            "imagen": {
                "src": "./img/imagen-horizon.jpg",
                "alt": "Portada Horizon Zero Dawn"
            }
        },
        {
            "id": "god-of-war",
            "titulo": "God of War",
            "genero": "Acción",
            "descripcion": "Acompaña a Kratos en su viaje por la mitología nórdica, enfrentando dioses y monstruos en una historia de redención y venganza.",
            "imagen": {
                "src": "./img/imagen-gow.jpg",
                "alt": "Portada God of War"
            }
        },
        {
            "id": "the-witcher-3",
            "titulo": "The Witcher 3: Wild Hunt",
            "genero": "RPG",
            "descripcion": "Sumérgete en un mundo de magia, monstruos y decisiones que tendrán consecuencias duraderas.",
            "imagen": {
                "src": "./img/imagen-theWitcher.jpg",
                "alt": "Portada The Witcher 3: Wild Hunt"
            }
        },
        {
            "id": "age-of-empires-4",
            "titulo": "Age of Empires IV",
            "genero": "Estrategia",
            "descripcion": "Construye tu imperio, lidera ejércitos y domina la historia en este juego de estrategia en tiempo real.",
            "imagen": {
                "src": "./img/imagen-aoe4.jpg",
                "alt": "Portada Age of Empires IV"
            }
        },
        {
            "id": "the-sims-4",
            "titulo": "The Sims 4",
            "genero": "Simulación",
            "descripcion": "Crea y controla la vida de tus Sims, construye hogares y explora infinitas posibilidades en este juego de simulación social.",
            "imagen": {
                "src": "./img/imagen-sims4.jpg",
                "alt": "Portada The Sims 4"
            }
        },
        {
            "id": "fc26",
            "titulo": "EA Sports FC26",
            "genero": "Deportes",
            "descripcion": "Disfruta del fútbol más realista con gráficos mejorados, modos de juego emocionantes y la posibilidad de crear tu propio equipo.",
            "imagen": {
                "src": "./img/imagen-fc26.jpg",
                "alt": "Portada EA Sports FC26"
            }
        },
        {
            "id": "resident-evil-village",
            "titulo": "Resident Evil Village",
            "genero": "Terror",
            "descripcion": "Enfrenta tus miedos en un pueblo lleno de horrores y secretos oscuros en esta entrega de la icónica saga de terror.",
            "imagen": {
                "src": "./img/imagen-revillage.jpg",
                "alt": "Portada Resident Evil Village"
            }
        },
        {
            "id": "gta-v",
            "titulo": "Grand Theft Auto V",
            "genero": "Acción",
            "descripcion": "Explora el extenso mundo de Los Santos y el condado de Blaine, y sigue la historia de tres criminales muy diferentes en busca del golpe perfecto.",
            "imagen": {
                "src": "./img/imagen-gta5.jpg",
                "alt": "Portada Grand Theft Auto V"
            }
        },
        {
            "id": "bully",
            "titulo": "Bully: Scholarship Edition",
            "genero": "Acción",
            "descripcion": "Explora la vida de un estudiante problemático en esta aventura llena de humor y desafíos en la escuela.",
            "imagen": {
                "src": "./img/imagen-bully.jpg",
                "alt": "Portada Bully: Scholarship Edition"
            }
        },
        {
            "id": "minecraft",
            "titulo": "Minecraft",
            "genero": "Supervivencia",
            "descripcion": "Explorá mundos infinitos generados por bloques y construí de todo, desde la casa más sencilla hasta el más grandioso de los castillos.",
            "imagen": {
                "src": "./img/imagen-minecraft.png",
                "alt": "Portada Minecraft"
            }
        },
        {
            "id": "the-last-of-us-1",
            "titulo": "The Last of Us Part I",
            "genero": "Acción",
            "descripcion": "Acompañá a Joel y Ellie en un viaje desgarrador a través de un país devastado por una pandemia.",
            "imagen": {
                "src": "./img/imagen-tlou.png",
                "alt": "Portada The Last of Us Part I"
            }
        },
        {
            "id": "spider-man-remastered",
            "titulo": "Marvel's Spider-Man Remastered",
            "genero": "Acción",
            "descripcion": "Balanceate por las calles de Nueva York como Peter Parker y enfréntate a icónicos villanos de Marvel.",
            "imagen": {
                "src": "./img/imagen-spiderman.png",
                "alt": "Portada Marvel's Spider-Man Remastered"
            }
        },
        {
            "id": "ghost-of-tsushima",
            "titulo": "Ghost of Tsushima",
            "genero": "Aventura",
            "descripcion": "Convertite en el Fantasma y forjá un nuevo camino para proteger la isla de Tsushima de la invasión enemiga.",
            "imagen": {
                "src": "./img/imagen-got.png",
                "alt": "Portada Ghost of Tsushima"
            }
        },
        {
            "id": "hollow-knight",
            "titulo": "Hollow Knight",
            "genero": "Aventura",
            "descripcion": "Descendé al mundo de Hallownest, un vasto reino subterráneo lleno de insectos, héroes y misterios antiguos.",
            "imagen": {
                "src": "./img/imagen-hollowknight.png",
                "alt": "Portada Hollow Knight"
            }
        }
    ]
}


const juegos = datos.juegos;

const generos = [
    { id: 'todos', nombre: 'Todos' },
    { id: 'rpg', nombre: 'RPG' },
    { id: 'accion', nombre: 'Acción' },
    { id: 'aventura', nombre: 'Aventura' },
    { id: 'carreras', nombre: 'Carreras' },
    { id: 'estrategia', nombre: 'Estrategia' },
    { id: 'simulacion', nombre: 'Simulación' },
    { id: 'deportes', nombre: 'Deportes' },
    { id: 'terror', nombre: 'Terror' },
    { id: 'supervivencia', nombre: 'Supervivencia' }
];


///local storage de favoritos y la carga del mismo

const CLAVE_FAVORITOS = 'gamevault-favoritos';

function cargarFavoritos() {
    try {
        const guardados = JSON.parse(
            localStorage.getItem(CLAVE_FAVORITOS) || '[]'
        );

        if (!Array.isArray(guardados)) {
            return [];
        }

        const idsValidos = guardados.filter(function (id) {
            return juegos.some(function (juego) {
                return juego.id === id;
            });
        });

        return [...new Set(idsValidos)];
    } catch {
        return [];
    }
}

let favoritos = cargarFavoritos();
let soloFavoritos = false;

const botonMostrarFavoritos = document.querySelector('#mostrar-favoritos');
const cantidadFavoritos = document.querySelector('#cantidad-favoritos');

let generoSeleccionado = 'todos';

const contenedorFiltros = document.querySelector('#filtros-genero');
const cantidadJuegos = document.querySelector('#cantidad-juegos');


const contenedorJuegos = document.querySelector('#contenedor-juegos');
const carruselJuegos = document.querySelector('#carrusel-juegos');
const modalDetalle = document.querySelector('#modal-detalle');
const modalImagen = document.querySelector('#modal-imagen');
const modalGenero = document.querySelector('#modal-genero');
const modalTitulo = document.querySelector('#modal-titulo');
const modalDescripcion = document.querySelector('#modal-descripcion');
const botonCerrarModal = document.querySelector('#cerrar-modal');

function crearCardJuego(juego) {

    ///Creamos el elemento article que contendrá la card del juego
    const card = document.createElement('article');
    card.classList.add('card-juego');

    ///Agregamos la imagen del juego 
    const imagen = document.createElement('img');
    imagen.src = juego.imagen.src;
    imagen.alt = juego.imagen.alt;
    imagen.loading = 'lazy';


    ///Hacemos el cuerpo de la card con el div y el contenido
    const contenido = document.createElement('div');
    contenido.classList.add('card-contenido');

    const genero = document.createElement('span');
    genero.classList.add('genero');
    genero.textContent = juego.genero;

    const titulo = document.createElement('h3');
    titulo.textContent = juego.titulo;

    const descripcion = document.createElement('p');
    descripcion.textContent = juego.descripcion;

    const botonDetalle = document.createElement('button');
    botonDetalle.type = 'button';
    botonDetalle.classList.add('boton', 'boton-principal');
    botonDetalle.textContent = 'Ver detalles';

    botonDetalle.setAttribute(
        'aria-label',
        `Ver detalles de ${juego.titulo}`
    );

    botonDetalle.addEventListener('click', function () {
        abrirDetalle(juego.id);
    });

    const botonFavorito = document.createElement('button');
    botonFavorito.dataset.juegoId = juego.id;
    botonFavorito.type = 'button';
    botonFavorito.classList.add('boton', 'boton-favorito');

    const esFavorito = favoritos.includes(juego.id);

    botonFavorito.textContent = esFavorito
        ? '♥ Quitar favorito'
        : '♡ Agregar favorito';

    botonFavorito.classList.toggle('activo', esFavorito);
    botonFavorito.setAttribute('aria-pressed', String(esFavorito));

    botonFavorito.setAttribute(
        'aria-label',
        `Favorito: ${juego.titulo}`
    );

    botonFavorito.addEventListener('click', function () {
        alternarFavorito(juego.id);
    });

    const acciones = document.createElement('div');
    acciones.classList.add('card-acciones');
    acciones.append(botonDetalle, botonFavorito);

    contenido.append(genero, titulo, descripcion, acciones);
    card.append(imagen, contenido);

    return card;
}

///Renderizamos los juegos con la lista de juegos y por cada elemento de la lista generamos la card con la estructura de arriba

function renderizarJuegos(lista) {
    const botonEnFoco = document.activeElement;
    let idEnFoco = null;

    if (
        contenedorJuegos.contains(botonEnFoco) &&
        botonEnFoco.classList.contains('boton-favorito')
    ) {
        idEnFoco = botonEnFoco.dataset.juegoId;
    }

    contenedorJuegos.replaceChildren();

    lista.forEach(function (juego) {
        const card = crearCardJuego(juego);
        contenedorJuegos.appendChild(card);
    });

    if (idEnFoco) {
        const botones = contenedorJuegos.querySelectorAll('.boton-favorito');

        const nuevoBoton = Array.from(botones).find(function (boton) {
            return boton.dataset.juegoId === idEnFoco;
        });

        if (nuevoBoton) {
            nuevoBoton.focus();
        } else {
            botonMostrarFavoritos.focus();
        }
    }
}

///Funciones de filtrado de los juegos

function filtrarJuegos(genero) {
    generoSeleccionado = genero.id;
    actualizarCatalogo();
}

function actualizarCatalogo() {
    let lista = juegos;

    if (generoSeleccionado !== 'todos') {
        const generoActual = generos.find(function (genero) {
            return genero.id === generoSeleccionado;
        });

        lista = lista.filter(function (juego) {
            return juego.genero === generoActual.nombre;
        });
    }

    if (soloFavoritos) {
        lista = lista.filter(function (juego) {
            return favoritos.includes(juego.id);
        });
    }

    renderizarJuegos(lista);
    actualizarBotonesFiltros();

    botonMostrarFavoritos.classList.toggle('activo', soloFavoritos);
    botonMostrarFavoritos.setAttribute(
        'aria-pressed',
        String(soloFavoritos)
    );

    cantidadFavoritos.textContent = `Favoritos: ${favoritos.length}`;

    if (lista.length === 0) {
        cantidadJuegos.textContent = soloFavoritos
            ? 'No tenés favoritos para el género seleccionado.'
            : 'No hay juegos para el género seleccionado.';
    } else {
        cantidadJuegos.textContent =
            `Mostrando ${lista.length} de ${juegos.length} juegos`;
    }
}

///Mostramos las opciones de filtrado

function renderizarFiltros() {
    contenedorFiltros.replaceChildren();

    generos.forEach(function (genero) {
        const boton = document.createElement('button');

        boton.type = 'button';
        boton.classList.add('filtro-genero');
        boton.textContent = genero.nombre;
        boton.dataset.genero = genero.id;

        boton.addEventListener('click', function () {
            filtrarJuegos(genero);
        });

        contenedorFiltros.appendChild(boton);
    });
}

function actualizarBotonesFiltros() {
    const botones = contenedorFiltros.querySelectorAll('button');

    botones.forEach(function (boton) {
        const estaActivo = boton.dataset.genero === generoSeleccionado;

        boton.classList.toggle('activo', estaActivo);
        boton.setAttribute('aria-pressed', String(estaActivo));
    });
}

///Primera funcion de renderizado del carrusel simil a lo anterior con las cards

function renderizarCarrusel(lista) {
    carruselJuegos.replaceChildren();

    lista.forEach(function (juego) {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta-carrusel');

        const imagen = document.createElement('img');
        imagen.src = juego.imagen.src;
        imagen.alt = juego.imagen.alt;
        imagen.loading = 'lazy';

        const titulo = document.createElement('h3');
        titulo.textContent = juego.titulo;

        tarjeta.append(imagen, titulo);
        carruselJuegos.appendChild(tarjeta);
    });
}


///Funcion que indica el desplazamiento del carrusel

function desplazarCarrusel(direccion) {
    const distancia = carruselJuegos.clientWidth * 0.8

    carruselJuegos.scrollBy({
        left: distancia * direccion,
        behavior: "smooth"
    });
}

///Indicaciones a los botones

const botonAnterior = document.querySelector('#carrusel-anterior');
const botonSiguiente = document.querySelector('#carrusel-siguiente');

botonAnterior.addEventListener('click', function () {
    desplazarCarrusel(-1)
});

botonSiguiente.addEventListener('click', function () {
    desplazarCarrusel(1)
});

///Funciones de detalle de los juegos

function abrirDetalle(id) {
    const juego = juegos.find(function (juego) {
        return juego.id === id;
    });

    if (!juego) {
        return;
    }

    modalImagen.src = juego.imagen.src;
    modalImagen.alt = juego.imagen.alt;
    modalGenero.textContent = juego.genero;
    modalTitulo.textContent = juego.titulo;
    modalDescripcion.textContent = juego.descripcion;

    modalDetalle.showModal();
}

function cerrarDetalle() {
    modalDetalle.close();
}

botonCerrarModal.addEventListener('click', cerrarDetalle);

///Funciones del local storage y los favoritos

function guardarFavoritos() {
    try {
        localStorage.setItem(
            CLAVE_FAVORITOS,
            JSON.stringify(favoritos)
        );

        return true;
    } catch {
        return false;
    }
}

function alternarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(function (favoritoId) {
            return favoritoId !== id;
        });
    } else {
        favoritos.push(id);
    }

    const guardado = guardarFavoritos();

    actualizarCatalogo();

    if (!guardado) {
        cantidadJuegos.textContent +=
            '. No se pudieron guardar los favoritos para la próxima visita.';
    }
}

botonMostrarFavoritos.addEventListener('click', function () {
    soloFavoritos = !soloFavoritos;
    actualizarCatalogo();
});

///Llamamos a las funciones


renderizarFiltros();
filtrarJuegos(generos[0]);
renderizarCarrusel(juegos);
















