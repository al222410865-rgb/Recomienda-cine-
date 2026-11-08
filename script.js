
// ==========================================
// RECOMENDADOR DE PELICULAS
// 80 PELICULAS: 20 POR CATEGORIA
// ==========================================

let edadUsuario = 0;
let listaActual = [];
let indiceActual = 0;
let generoActual = "";

const edad = document.getElementById("edad");
const btnEdad = document.getElementById("btnEdad");
const mensaje = document.getElementById("mensaje");

const seccionGeneros = document.getElementById("seccionGeneros");
const seccionResultados = document.getElementById("seccionResultados");

const botonesGenero = document.querySelectorAll(
    ".botones-genero button"
);

const peliculasContainer = document.getElementById("peliculas");
const categoria = document.getElementById("categoria");
const btnOtras = document.getElementById("btnOtras");
const contador = document.getElementById("contador");


// ==========================================
// CATALOGO DE 80 PELICULAS
// ==========================================

const peliculas = [

    // ======================================
    // DRAMA - 20 PELICULAS
    // ======================================

    {
        titulo: "Forrest Gump",
        anio: 1994,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "La vida de Forrest Gump demuestra cómo una persona puede influir en distintos acontecimientos históricos."
    },
    {
        titulo: "En busca de la felicidad",
        anio: 2006,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un padre lucha por salir adelante y construir un futuro mejor para su hijo."
    },
    {
        titulo: "Titanic",
        anio: 1997,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Dos jóvenes de diferentes clases sociales se conocen durante el viaje del famoso transatlántico."
    },
    {
        titulo: "La teoría del todo",
        anio: 2014,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Relata la vida del científico Stephen Hawking y su relación con Jane Wilde."
    },
    {
        titulo: "Mujercitas",
        anio: 2019,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Cuatro hermanas buscan cumplir sus sueños mientras enfrentan los cambios de la vida."
    },
    {
        titulo: "El discurso del rey",
        anio: 2010,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un rey trabaja con un especialista para superar sus dificultades al hablar en público."
    },
    {
        titulo: "Billy Elliot",
        anio: 2000,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un joven descubre su pasión por el ballet y busca superar los prejuicios de su entorno."
    },
    {
        titulo: "Cadena de favores",
        anio: 2000,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un estudiante crea una propuesta para cambiar el mundo mediante pequeños actos de ayuda."
    },
    {
        titulo: "La vida es bella",
        anio: 1997,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un padre utiliza su imaginación para proteger emocionalmente a su hijo durante una época difícil."
    },
    {
        titulo: "El club de los poetas muertos",
        anio: 1989,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un profesor inspira a sus estudiantes a pensar por sí mismos y descubrir sus pasiones."
    },
    {
        titulo: "En el nombre del padre",
        anio: 1993,
        genero: "Drama",
        edadMinima: 16,
        sinopsis: "Un hombre lucha por demostrar su inocencia y recuperar su libertad."
    },
    {
        titulo: "El pianista",
        anio: 2002,
        genero: "Drama",
        edadMinima: 16,
        sinopsis: "Un pianista intenta sobrevivir durante la Segunda Guerra Mundial."
    },
    {
        titulo: "El curioso caso de Benjamin Button",
        anio: 2008,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un hombre vive una condición extraordinaria: envejece de manera inversa."
    },
    {
        titulo: "Siempre a tu lado",
        anio: 2009,
        genero: "Drama",
        edadMinima: 7,
        sinopsis: "Un perro desarrolla un vínculo especial con su dueño y demuestra una gran lealtad."
    },
    {
        titulo: "El lado bueno de las cosas",
        anio: 2012,
        genero: "Drama",
        edadMinima: 16,
        sinopsis: "Dos personas con experiencias complicadas encuentran apoyo y nuevas oportunidades."
    },
    {
        titulo: "Interestelar",
        anio: 2014,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un grupo de exploradores viaja por el espacio buscando un futuro para la humanidad."
    },
    {
        titulo: "La sociedad de los poetas muertos",
        anio: 1989,
        genero: "Drama",
        edadMinima: 13,
        sinopsis: "Un profesor cambia la forma en que sus alumnos ven la educación y la vida."
    },
    {
        titulo: "El renacido",
        anio: 2015,
        genero: "Drama",
        edadMinima: 16,
        sinopsis: "Un explorador intenta sobrevivir en condiciones extremas y regresar con su familia."
    },
    {
        titulo: "Historia de un matrimonio",
        anio: 2019,
        genero: "Drama",
        edadMinima: 16,
        sinopsis: "Una pareja atraviesa una separación mientras intenta encontrar un nuevo equilibrio familiar."
    },
    {
        titulo: "La milla verde",
        anio: 1999,
        genero: "Drama",
        edadMinima: 16,
        sinopsis: "Un guardia de prisión conoce a un hombre con una capacidad extraordinaria."
    },


    // ======================================
    // COMEDIA - 20 PELICULAS
    // ======================================

    {
        titulo: "Mi pobre angelito",
        anio: 1990,
        genero: "Comedia",
        edadMinima: 7,
        sinopsis: "Un niño debe proteger su casa cuando descubre que se quedó solo durante las vacaciones."
    },
    {
        titulo: "La máscara",
        anio: 1994,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Un hombre encuentra una misteriosa máscara que transforma su personalidad."
    },
    {
        titulo: "Una esposa de mentira",
        anio: 2011,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Una mentira provoca una serie de situaciones divertidas durante unas vacaciones."
    },
    {
        titulo: "Son como niños",
        anio: 2010,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Un grupo de antiguos amigos se reúne y recuerda sus aventuras de juventud."
    },
    {
        titulo: "Escuela de rock",
        anio: 2003,
        genero: "Comedia",
        edadMinima: 7,
        sinopsis: "Un músico se hace pasar por profesor y forma una banda con sus estudiantes."
    },
    {
        titulo: "Legalmente rubia",
        anio: 2001,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Una joven demuestra que puede alcanzar sus metas en el mundo del derecho."
    },
    {
        titulo: "Jumanji",
        anio: 1995,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Un misterioso juego de mesa convierte una aventura familiar en una experiencia extraordinaria."
    },
    {
        titulo: "El diablo viste a la moda",
        anio: 2006,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Una joven comienza a trabajar en una importante revista de moda."
    },
    {
        titulo: "Paddington",
        anio: 2014,
        genero: "Comedia",
        edadMinima: 7,
        sinopsis: "Un oso llega a Londres y encuentra una familia que cambia su vida."
    },
    {
        titulo: "Matilda",
        anio: 1996,
        genero: "Comedia",
        edadMinima: 7,
        sinopsis: "Una niña inteligente descubre que tiene habilidades extraordinarias."
    },
    {
        titulo: "El profesor chiflado",
        anio: 1996,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Un profesor desarrolla una fórmula que transforma su vida de manera inesperada."
    },
    {
        titulo: "La familia del futuro",
        anio: 2007,
        genero: "Comedia",
        edadMinima: 7,
        sinopsis: "Un joven inventor viaja al futuro y descubre una familia muy especial."
    },
    {
        titulo: "Una noche en el museo",
        anio: 2006,
        genero: "Comedia",
        edadMinima: 7,
        sinopsis: "Un guardia nocturno descubre que las exhibiciones de un museo cobran vida."
    },
    {
        titulo: "Click: Perdiendo el control",
        anio: 2006,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Un hombre consigue un control remoto que le permite modificar diferentes momentos de su vida."
    },
    {
        titulo: "La propuesta",
        anio: 2009,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Una ejecutiva convence a su asistente de fingir un compromiso para resolver un problema laboral."
    },
    {
        titulo: "¿Qué pasó ayer?",
        anio: 2009,
        genero: "Comedia",
        edadMinima: 18,
        sinopsis: "Tres amigos intentan reconstruir los acontecimientos de una noche inolvidable."
    },
    {
        titulo: "Loco y estúpido amor",
        anio: 2011,
        genero: "Comedia",
        edadMinima: 16,
        sinopsis: "Un hombre busca reinventarse después de experimentar cambios importantes en su relación."
    },
    {
        titulo: "Free Guy",
        anio: 2021,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Un personaje de un videojuego descubre que su mundo no es exactamente lo que parece."
    },
    {
        titulo: "Un espía y medio",
        anio: 2016,
        genero: "Comedia",
        edadMinima: 13,
        sinopsis: "Dos antiguos compañeros de escuela terminan involucrados en una misión inesperada."
    },
    {
        titulo: "No miren arriba",
        anio: 2021,
        genero: "Comedia",
        edadMinima: 16,
        sinopsis: "Dos científicos intentan advertir al mundo sobre una amenaza que se aproxima a la Tierra."
    },


    // ======================================
    // CRIMEN - 20 PELICULAS
    // ======================================

    {
        titulo: "Entre navajas y secretos",
        anio: 2019,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "Un detective investiga la misteriosa muerte de un escritor y descubre secretos familiares."
    },
    {
        titulo: "Atrápame si puedes",
        anio: 2002,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "Un joven consigue engañar a distintas instituciones mientras un agente intenta atraparlo."
    },
    {
        titulo: "El código Da Vinci",
        anio: 2006,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "Un investigador sigue una serie de pistas relacionadas con un misterio histórico."
    },
    {
        titulo: "Sherlock Holmes",
        anio: 2009,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "El famoso detective investiga una serie de sucesos extraños junto a Watson."
    },
    {
        titulo: "La gran estafa",
        anio: 2001,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "Un grupo organiza un elaborado plan para realizar un importante robo."
    },
    {
        titulo: "El secreto de sus ojos",
        anio: 2009,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Un investigador retirado vuelve a un caso que marcó profundamente su vida."
    },
    {
        titulo: "Zodiac",
        anio: 2007,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Periodistas e investigadores intentan resolver una serie de crímenes sin respuesta."
    },
    {
        titulo: "Los infiltrados",
        anio: 2006,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Un policía y un integrante de una organización criminal intentan descubrir sus identidades."
    },
    {
        titulo: "El caso Slevin",
        anio: 2006,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Un hombre queda involucrado en un conflicto entre dos grupos criminales."
    },
    {
        titulo: "Asesinato en el Orient Express",
        anio: 2017,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "Un detective investiga un asesinato ocurrido durante un viaje en tren."
    },
    {
        titulo: "Enola Holmes",
        anio: 2020,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "La hermana menor de Sherlock Holmes utiliza su inteligencia para resolver un misterio."
    },
    {
        titulo: "Misterio a bordo",
        anio: 2019,
        genero: "Crimen",
        edadMinima: 13,
        sinopsis: "Una pareja de vacaciones termina involucrada en una investigación policial."
    },
    {
        titulo: "Prisioneros",
        anio: 2013,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Un detective investiga la desaparición de dos niñas mientras sus familias buscan respuestas."
    },
    {
        titulo: "El lobo de Wall Street",
        anio: 2013,
        genero: "Crimen",
        edadMinima: 18,
        sinopsis: "Un corredor de bolsa alcanza el éxito financiero y se enfrenta a las consecuencias de sus decisiones."
    },
    {
        titulo: "Pulp Fiction",
        anio: 1994,
        genero: "Crimen",
        edadMinima: 18,
        sinopsis: "Varias historias relacionadas con personajes del mundo criminal se entrelazan en Los Ángeles."
    },
    {
        titulo: "El padrino",
        anio: 1972,
        genero: "Crimen",
        edadMinima: 18,
        sinopsis: "La historia de una familia que dirige una poderosa organización criminal."
    },
    {
        titulo: "Los sospechosos de siempre",
        anio: 1995,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Un grupo de sospechosos queda relacionado con una investigación llena de secretos."
    },
    {
        titulo: "La isla siniestra",
        anio: 2010,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Dos investigadores llegan a una institución aislada para resolver una desaparición."
    },
    {
        titulo: "El coleccionista de huesos",
        anio: 1999,
        genero: "Crimen",
        edadMinima: 16,
        sinopsis: "Un investigador y una agente trabajan juntos para resolver una serie de casos."
    },
    {
        titulo: "Perdida",
        anio: 2014,
        genero: "Crimen",
        edadMinima: 18,
        sinopsis: "La desaparición de una mujer provoca sospechas y revela secretos de su matrimonio."
    },


    // ======================================
    // MUSICA - 20 PELICULAS
    // ======================================

    {
        titulo: "La calle 42",
        anio: 1933,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Un grupo de artistas prepara un espectáculo musical mientras enfrenta dificultades en Broadway."
    },
    {
        titulo: "El mago de Oz",
        anio: 1939,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Dorothy viaja a un mundo fantástico donde conoce personajes que la acompañan en una aventura musical."
    },
    {
        titulo: "Un americano en París",
        anio: 1951,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Un pintor estadounidense busca el amor y el éxito artístico en París."
    },
    {
        titulo: "Cantando bajo la lluvia",
        anio: 1952,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Un grupo de artistas enfrenta los cambios que trae la llegada del cine sonoro."
    },
    {
        titulo: "Siete novias para siete hermanos",
        anio: 1954,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Una historia musical sobre siete hermanos que buscan encontrar el amor."
    },
    {
        titulo: "West Side Story",
        anio: 1961,
        genero: "Música",
        edadMinima: 13,
        sinopsis: "Dos jóvenes se enamoran a pesar de pertenecer a grupos rivales de Nueva York."
    },
    {
        titulo: "Mary Poppins",
        anio: 1964,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Una niñera mágica transforma la vida de una familia mediante aventuras y canciones."
    },
    {
        titulo: "La novicia rebelde",
        anio: 1965,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Una joven institutriz llega a una familia y transforma su vida mediante la música."
    },
    {
        titulo: "Grease",
        anio: 1978,
        genero: "Música",
        edadMinima: 13,
        sinopsis: "Dos jóvenes se reencuentran en la escuela y viven una historia llena de música."
    },
    {
        titulo: "Fama",
        anio: 1980,
        genero: "Música",
        edadMinima: 13,
        sinopsis: "Estudiantes de una escuela artística trabajan para alcanzar sus sueños en el escenario."
    },
    {
        titulo: "Moulin Rouge",
        anio: 2001,
        genero: "Música",
        edadMinima: 16,
        sinopsis: "Un escritor se enamora de una artista en un espectáculo musical de París."
    },
    {
        titulo: "Chicago",
        anio: 2002,
        genero: "Música",
        edadMinima: 16,
        sinopsis: "Dos mujeres buscan fama y atención pública en el mundo del espectáculo."
    },
    {
        titulo: "Mamma Mia!",
        anio: 2008,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Una joven invita a tres posibles padres a su boda en una isla griega."
    },
    {
        titulo: "Los miserables",
        anio: 2012,
        genero: "Música",
        edadMinima: 13,
        sinopsis: "Un hombre intenta reconstruir su vida en una historia musical ambientada en Francia."
    },
    {
        titulo: "La La Land",
        anio: 2016,
        genero: "Música",
        edadMinima: 13,
        sinopsis: "Una actriz y un músico persiguen sus sueños mientras construyen una relación."
    },
    {
        titulo: "El gran showman",
        anio: 2017,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Un espectáculo reúne música, baile y artistas que buscan demostrar su talento."
    },
    {
        titulo: "Bohemian Rhapsody",
        anio: 2018,
        genero: "Música",
        edadMinima: 13,
        sinopsis: "La historia de Freddie Mercury y el desarrollo de la banda Queen."
    },
    {
        titulo: "Rocketman",
        anio: 2019,
        genero: "Música",
        edadMinima: 16,
        sinopsis: "Una película musical inspirada en la trayectoria del cantante Elton John."
    },
    {
        titulo: "Tick, Tick... Boom!",
        anio: 2021,
        genero: "Música",
        edadMinima: 13,
        sinopsis: "Un compositor intenta alcanzar sus metas artísticas mientras enfrenta el paso del tiempo."
    },
    {
        titulo: "Wonka",
        anio: 2023,
        genero: "Música",
        edadMinima: 7,
        sinopsis: "Un joven chocolatero busca cumplir su sueño de abrir una tienda extraordinaria."
    }

];


// ==========================================
// MEZCLAR PELICULAS
// ==========================================

function mezclar(array) {

    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];

    }

    return copia;
}


// ==========================================
// VALIDAR EDAD
// ==========================================

function validarEdad() {

    edadUsuario = Number(edad.value);

    if (
        !Number.isInteger(edadUsuario) ||
        edadUsuario < 1 ||
        edadUsuario > 120
    ) {

        mensaje.textContent = "Ingresa una edad válida.";
        mensaje.className = "mensaje-error";

        return;
    }

    mensaje.textContent = "Edad registrada correctamente.";
    mensaje.className = "";

    seccionGeneros.classList.remove("oculto");
    seccionResultados.classList.add("oculto");

    btnOtras.classList.add("oculto");

    peliculasContainer.innerHTML = "";
    contador.textContent = "";

}


// ==========================================
// FILTRAR PELICULAS POR EDAD
// ==========================================

function obtenerPeliculasPorEdad(genero) {

    const catalogo = peliculas.filter(
        pelicula => pelicula.genero === genero
    );

    // Para personas de 30 años o más se considera
    // todo el catálogo de la categoría.
    if (edadUsuario >= 30) {
        return catalogo;
    }

    // Para menores se utiliza la edad mínima
    // orientativa de cada película.
    return catalogo.filter(
        pelicula => edadUsuario >= pelicula.edadMinima
    );

}


// ==========================================
// SELECCIONAR CATEGORIA
// ==========================================

function seleccionarGenero(genero) {

    generoActual = genero;

    const disponibles = obtenerPeliculasPorEdad(genero);

    categoria.textContent = "Recomendación de " + genero;

    botonesGenero.forEach(boton => {

        boton.classList.toggle(
            "activo",
            boton.dataset.genero === genero
        );

    });

    seccionResultados.classList.remove("oculto");

    if (disponibles.length === 0) {

        peliculasContainer.innerHTML = `
            <div class="tarjeta-pelicula">
                <h3>Sin recomendaciones disponibles</h3>
                <p class="sinopsis">
                    No hay películas disponibles para esta edad
                    en la categoría seleccionada.
                </p>
            </div>
        `;

        btnOtras.classList.add("oculto");
        contador.textContent = "";

        return;
    }

    listaActual = mezclar(disponibles);
    indiceActual = 0;

    btnOtras.classList.remove("oculto");

    mostrarSiguientePelicula();

}


// ==========================================
// MOSTRAR UNA PELICULA A LA VEZ
// ==========================================

function mostrarSiguientePelicula() {

    if (listaActual.length === 0) {
        return;
    }

    // Cuando termina la lista, se inicia otra ronda.
    if (indiceActual >= listaActual.length) {

        const ultimaPelicula = listaActual[listaActual.length - 1];

        listaActual = mezclar(listaActual);

        // Evitar repetir inmediatamente la última.
        if (
            listaActual.length > 1 &&
            listaActual[0].titulo === ultimaPelicula.titulo
        ) {

            [
                listaActual[0],
                listaActual[1]
            ] = [
                listaActual[1],
                listaActual[0]
            ];

        }

        indiceActual = 0;

    }

    const pelicula = listaActual[indiceActual];

    indiceActual++;

    dibujarPelicula(pelicula);

}


// ==========================================
// MOSTRAR TARJETA DE PELICULA
// ==========================================

function dibujarPelicula(pelicula) {

    peliculasContainer.innerHTML = "";

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-pelicula";

    const titulo = document.createElement("h3");
    titulo.textContent = pelicula.titulo;

    const datos = document.createElement("p");
    datos.className = "datos-pelicula";

    datos.textContent =
        "Año: " + pelicula.anio +
        " | Categoría: " + pelicula.genero;

    const sinopsis = document.createElement("p");
    sinopsis.className = "sinopsis";
    sinopsis.textContent = pelicula.sinopsis;

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(datos);
    tarjeta.appendChild(sinopsis);

    peliculasContainer.appendChild(tarjeta);

    contador.textContent =
        "Recomendación " +
        indiceActual +
        " de " +
        listaActual.length;

}


// ==========================================
// EVENTOS
// ==========================================

btnEdad.addEventListener("click", validarEdad);

edad.addEventListener("keydown", function(evento) {

    if (evento.key === "Enter") {
        validarEdad();
    }

});

botonesGenero.forEach(boton => {

    boton.addEventListener("click", function() {

        seleccionarGenero(this.dataset.genero);

    });

});

btnOtras.addEventListener("click", function() {

    mostrarSiguientePelicula();

});


// ==========================================
// INFORMACION DEL CATALOGO
// ==========================================

console.log("CinePlus iniciado correctamente.");
console.log("Total de películas:", peliculas.length);

["Drama", "Comedia", "Crimen", "Música"].forEach(genero => {

    const total = peliculas.filter(
        pelicula => pelicula.genero === genero
    ).length;

    console.log(genero + ": " + total + " películas");

});
