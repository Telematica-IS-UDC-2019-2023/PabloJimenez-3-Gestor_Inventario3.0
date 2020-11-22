export default class Interfaz {

    constructor(){

    }

    listProd({codigo,nombre,descripcion,cantidad,costo}) {
        const first = document.querySelector('#product-list');
        const div = document.createElement('div');

        div.innerHTML = `
        <p>Codigo: ${codigo}</p>
        <p>Nombre: ${nombre}</p>
        <p>Descripcion: ${descripcion}</p>
        <p>Cantidad: ${cantidad}</p>
        <p>Costo: ${costo}</p>
        <p>Total: ${cantidad * costo}</p>
        <p>------------------------------</p>
        `;

        first.appendChild(div);
    }
}