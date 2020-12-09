let addButton = document.querySelector('#boton');
let mostrar = document.querySelector('#resultado');
//let formulario = document.querySelector('#formuario');


addButton.addEventListener('click', validar);
document.addEventListener('DOMContentLoaded', fechas);
document.addEventListener('DOMContentLoaded', mostarEnDom);
mostrar.addEventListener('click', borrarTarea);

function validar(e) {

    e.preventDefault();


    let texto = document.querySelector('#agregar').value;


    if (texto == "") {
        console.log("ingrese un texto valido")
    } else {

        tarea(texto);
        agregarLocalStorage(texto);


    }

    limpiar();
}

function tarea(texto) {

    let guardarTexto = texto;

    console.log(guardarTexto);

    mostrar.innerHTML += `
        <div><p>${guardarTexto}</p></div>
    `;

    const borrarTarea = document.createElement('a');
    borrarTarea.classList = 'borrarTarea';
    borrarTarea.innerText = 'X'

    mostrar.appendChild(borrarTarea);


}

function agregarLocalStorage(texto) {
    let textos = texto;

    textos = obtenerTareaLocalStorage();

    textos.push(texto);

    localStorage.setItem('tareas', JSON.stringify(textos));
}


function obtenerTareaLocalStorage() {
    let tareas;

    if (localStorage.getItem('tareas') === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem('tareas'));
    }

    return tareas;

}


function mostarEnDom() {

    let tarea = obtenerTareaLocalStorage();

    tarea.forEach(tex => {
        //console.log(tex)

        const caja = document.createElement('div');
        caja.innerText = tex;

        const borrarTarea = document.createElement('a');
        borrarTarea.classList = 'borrarTarea';
        borrarTarea.innerText = 'X'



        mostrar.appendChild(caja);


        mostrar.appendChild(borrarTarea);
    });
}

function borrarTarea(e) {
    e.preventDefault();

    if (e.target.className === 'borrarTarea') {
        e.target.previousSibling.remove();

        borrarTareaLocalStorage(e.target.previousSibling.remove());
        e.target.remove();

    }
}


function borrarTareaLocalStorage(texto) {

    let tareas, borrarTarea;

    tareas = obtenerTareaLocalStorage();

    tareas.forEach((tarea, index) => {
        if (borrarTarea === texto) {
            tareas.splice(index, 1);
        }
    });

    localStorage.setItem('tareas', JSON.stringify(tareas));
}





function fechas() {

    let dias = document.querySelector('#dia');
    let mesDom = document.querySelector('#mes');
    let yearst = document.querySelector('#years');
    let nameDay = document.querySelector('#name-dia');
    let days = new Date();

    const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const nameDias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let fecha = days.getDate();
    let dai = nameDias[days.getDay()];
    let mes = meses[days.getMonth()];
    let yearA = days.getFullYear();

    dias.innerHTML = `<div><span>${fecha}</span></div>`;
    mesDom.innerHTML = `<div><span>${mes}</span></div>`;
    yearst.innerHTML = `<div><span>${yearA}</span></div>`;
    nameDay.innerHTML = `<div><span>${dai}</span></div>`;
}

function limpiar() {

    let area = document.querySelector('#agregar').value = "";


}