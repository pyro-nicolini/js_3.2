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
const input1 = document.querySelector('.load');
const input2 = document.querySelector('.up');
const input3 = document.querySelector('.yes');

let total = 0;

let conteo = document.querySelector('.conteo');
let contador = document.querySelector('.parrafox2');


function actualizarTotal() {
    total = suma(input1, input2, input3);
    conteo.innerText = total;
}

input1.addEventListener('input', actualizarTotal);
input2.addEventListener('input', actualizarTotal);
input3.addEventListener('input', actualizarTotal);

function suma(a, b, c) {
    const sumaTotal = Number(a.value) + Number(b.value) + Number(c.value);
    if (sumaTotal > 9) {
        contador.classList = 'status';
    } else {
        contador.classList = 'parrafox2';
    }
    return sumaTotal > 0 ? sumaTotal : 0;
}

let mensaje = document.querySelector('.verif');

function verificar() {
    if (total > 10) {
        mensaje.innerText = `No puedes llevar más de 10 stickers, debes restar ${total - 10} stickers`;
    } else if (total > 9) {
        mensaje.innerText = `No puedes llevar más de 10 stickers`;
    } else if (total > 0) {
        mensaje.innerText = `Estás llevando ${total} stickers`;
    } else {
        mensaje.innerText = "No has seleccionado stickers.";
    }
}


/* Logica 3 */

// const clave1 = document.querySelector('#combi1');
// const clave2 = document.querySelector('#combi2');
// const clave3 = document.querySelector('#combi3');

// clave1.addEventListener('clave', (e) => {
//     return `${e.target.value}`});

// clave2.addEventListener('clave', (e) => {
//     return `${e.target.value}`});

// clave3.addEventListener('clave', (e) => {
//     return `${e.target.value}`});
