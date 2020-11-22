export default class Producto{
    constructor(codigo,nombre,descripcion,cantidad,costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
        this.total = costo*cantidad;
        this.siguiente = null;
        this.anterior = null;
    }
}