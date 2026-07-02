/* ==========================
   VELVET MEMORIES
   script.js
========================== */

// ==========================
// ACTIVAR SONIDO DEL VIDEO
// ==========================

const botonSonido = document.getElementById("activar-sonido");
const ytPlayer = document.getElementById("ytplayer");

if (botonSonido && ytPlayer) {

    botonSonido.addEventListener("click", () => {

        ytPlayer.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "unMute", args: [] }),
            "*"
        );

        ytPlayer.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
            "*"
        );

        ytPlayer.contentWindow.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*"
        );

        botonSonido.classList.add("oculto");

    });

}

// ==========================
// BOTÓN VOLVER ARRIBA
// ==========================

const botonArriba = document.getElementById("arriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// ANIMACIONES AL HACER SCROLL
// ==========================

const elementos = document.querySelectorAll(
    ".card, .testimonio, .galeria img, section h2, .hero .overlay"
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

}, {

    threshold: 0.2

});

elementos.forEach((elemento) => {

    observador.observe(elemento);

});

// ==========================
// EFECTO EN LA GALERÍA
// ==========================

const imagenes = document.querySelectorAll(".galeria img");

imagenes.forEach((imagen) => {

    imagen.addEventListener("mouseenter", () => {

        imagen.style.transform = "scale(1.05) rotate(1deg)";

        imagen.style.transition = "0.4s";

    });

    imagen.addEventListener("mouseleave", () => {

        imagen.style.transform = "scale(1) rotate(0deg)";

    });

});

// ==========================
// EFECTO EN TARJETAS
// ==========================

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {

        tarjeta.style.boxShadow = "0 0 25px rgba(212,175,55,0.5)";

    });

    tarjeta.addEventListener("mouseleave", () => {

        tarjeta.style.boxShadow = "none";

    });

});

// ==========================
// MENÚ ACTIVO AL DESPLAZARSE
// ==========================

const secciones = document.querySelectorAll("section");
const enlaces = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let actual = "";

    secciones.forEach((seccion) => {

        const top = seccion.offsetTop - 120;
        const alto = seccion.offsetHeight;

        if (scrollY >= top && scrollY < top + alto) {

            actual = seccion.getAttribute("id");

        }

    });

    enlaces.forEach((link) => {

        link.classList.remove("activo");

        if (link.getAttribute("href") === "#" + actual) {

            link.classList.add("activo");

        }

    });

});

// ==========================
// MENSAJE DE BIENVENIDA
// ==========================

window.addEventListener("load", () => {

    console.log("✨ Bienvenido a Velvet Memories");

});

// ==========================
// EFECTO SUAVE EN BOTONES
// ==========================

const botones = document.querySelectorAll(".boton, .whatsapp");

botones.forEach((boton) => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transform = "scale(1.05)";

        boton.style.transition = "0.3s";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "scale(1)";

    });

});
