document.querySelectorAll(".titulo").forEach(btn => {
    btn.addEventListener("click", () => {

        let item = btn.parentElement;
        let icono = btn.querySelector("i");

        // cerrar todos
        document.querySelectorAll(".item").forEach(i => {
            if (i !== item) {
                i.classList.remove("activo");

                let otroIcono = i.querySelector("i");
                if (otroIcono) otroIcono.classList.replace("fa-minus", "fa-plus");
            }
        });

        // abrir/cerrar actual
        item.classList.toggle("activo");

        // cambiar icono
        if (item.classList.contains("activo")) {
            icono.classList.replace("fa-plus", "fa-minus");
        } else {
            icono.classList.replace("fa-minus", "fa-plus");
        }

    });
});