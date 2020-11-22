import Producto from './modules/product.js';
import Inventario from './modules/inventary.js';
import Interfaz from './modules/interface.js';

//const inventario = new Inventario();
const interfaz = new Interfaz()

const addProd = document.querySelector('#addProd');
const btnListFirst = document.querySelector('#addfirst');
const btnDelFirst = document.querySelector('#delfirst');
const delProd = document.querySelector('#delProd')
const searchProd = document.querySelector('#searchProd')
const changePos = document.querySelector('#changePos')
const btnList = document.querySelector('#btn')
const btnInvertedList = document.querySelector('#btn2')
const getList = document.querySelector('#product-list')
const history = document.querySelector('#history')

var producto;
var inventario;



addProd.addEventListener('click', () => {
    console.clear()
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);

    if (inventario === undefined || inventario.inicio ===null){
        producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario = new Inventario();
        inventario.addProduct(producto)

    } else {
        var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
        
        inventario.addProduct(producto,aux)
        producto=aux;
    }
    console.log(inventario)

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)

    divMsg.innerHTML = `
    Agregaste un nuevo producto!`
})

btnListFirst.addEventListener('click', () =>{
    console.clear()
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);

    if (inventario === undefined || inventario.inicio ===null){
        producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.addFirst(producto)
    } else {
        var producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.addFirst(producto)
    }
    console.log(inventario)

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)

    divMsg.innerHTML = `
    <p>Agregaste un articulo al inicio de la lista!</p>`
})

btnDelFirst.addEventListener('click', () =>{
    console.clear()
    
    inventario.delFirst()
    console.log(inventario)

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)

    divMsg.innerHTML = `
    Borraste el primer articulo de la lista!`
})

delProd.addEventListener('click', () => {
    console.clear()

    const codigo = document.getElementById('codeDel').value;
    let code = new Producto(codigo, '', '', '', '');
    inventario.delProd(code.codigo)

    console.log(inventario)

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)

    divMsg.innerHTML = `
    Borraste el articulo 
    <p>Codigo:${code.codigo}</p>`
})

searchProd.addEventListener('click', () => {
    console.clear()

    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);

    let codigo = document.getElementById('codeSearch').value;
    let prod = new Producto(codigo,nombre,descripcion,cantidad,costo);
    inventario.searchProd(prod.codigo)

    console.log(inventario);
    console.log(prod);
    

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)
    
    divMsg.innerHTML = `
    Buscaste el articulo 
    <p>Codigo:${prod.codigo}</p>
    <p>Nombre:${prod.nombre}</p>
    <p>Descripcion:${prod.descripcion}</p>
    <p>Cantidad: ${prod.cantidad}</p>
    <p>Costo:${prod.costo}</p>
    <p>Total: ${prod.cantidad * prod.costo}</p>`
})

changePos.addEventListener('click', () => {
    console.clear()

    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);

    let position = document.getElementById('prodChanger')
    let producto = new Producto(codigo,nombre,descripcion,cantidad,costo);
    inventario.changePos(producto, Number(position.value))

    console.log(inventario)

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)
    divMsg.innerHTML = `Se insertó un elemento`
})

btnList.addEventListener('click', () => {
    console.clear()
    
    console.log(inventario.listProds())
    getList.innerHTML = `${inventario.listProds()}`

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)
    divMsg.innerHTML = `<p>Se listaron los elementos</p>`

})

btnInvertedList.addEventListener('click', () => {
    console.clear()

    console.log(inventario.listProdsInverse())
    getList.innerHTML = `${inventario.listProdsInverse()}`

    const divMsg = document.createElement('div')
    history.appendChild(divMsg)
    divMsg.innerHTML = `<p>Se listaron inversamente los elementos</p>`
})