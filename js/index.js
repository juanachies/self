document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".boton");
    const barra = document.querySelector(".barra");
    const cerrarBtn = document.querySelector(".cerrar-barra");

    boton.addEventListener("click", () => {
        barra.classList.toggle("activa");
    });

    cerrarBtn.addEventListener("click", () => {
        barra.classList.remove("activa");
    });
});
