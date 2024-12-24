/* Logica 1 */
const imagen = document.querySelector('article');
const seleccionado = document.getElementById('status');

let prap = '10px solid red';
let prop = 'none';

imagen.style.border = prop;
imagen.style.borderRadius = "10px";

imagen.addEventListener('click', function() {
    if (imagen.style.border != prap) {
        imagen.style.border = prap; 
        seleccionado.innerText = "seleccionado";
        seleccionado.classList = "status2";
    } else {
        imagen.style.border = prop;
        seleccionado.innerText = "No seleccionado";
        seleccionado.classList = "status";
    }
});

/* Logica 2 */