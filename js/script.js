// 1. INICIALIZACIÓN DE ANIMACIONES (AOS)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});

// 2. LÓGICA DEL ACORDEÓN
document.querySelectorAll(".titulo").forEach(btn => {
    btn.addEventListener("click", () => {
        let item = btn.parentElement;
        let icono = btn.querySelector("i");

        document.querySelectorAll(".item").forEach(i => {
            if (i !== item) {
                i.classList.remove("activo");
                let otroIcono = i.querySelector("i");
                if (otroIcono) otroIcono.classList.replace("fa-minus", "fa-plus");
            }
        });

        item.classList.toggle("activo");

        if (item.classList.contains("activo")) {
            if (icono) icono.classList.replace("fa-plus", "fa-minus");
        } else {
            if (icono) icono.classList.replace("fa-minus", "fa-plus");
        }
    });
});

// 3. NAVEGACIÓN FUNCIONAL (Cerrar menú en móviles)
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');

if (menuToggle) {
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            if (window.innerWidth < 992) { 
                bsCollapse.hide(); 
            }
        });
    });
}