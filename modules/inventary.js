import Producto from './product.js'
export default class Inventario {

    constructor(){
        this.inicio = null;
    }

    addProduct(producto, productoNuevo){
        if(this.inicio == null){
            this.inicio = producto;
        } else {
            let aux  = this.inicio;
            while(aux.siguiente != null){
                aux= aux.siguiente;
            }
            aux.siguiente = productoNuevo;
            aux.siguiente.anterior = aux;
        }
    }

    addFirst(producto){
        if(this.inicio === null){
            this.inicio = producto;
        } else {
            let gg = this.inicio;
            this.inicio = producto;
            this.inicio.siguiente = gg;
            this.inicio.siguiente.anterior = this.inicio;   
        }
    }

    delProd(code){
        let gg = this.inicio;
        if(this.inicio.codigo === code){
            this.inicio = this.inicio.siguiente;
            if(this.inicio != null){
                this.inicio.anterior = null;
            }
            return new Producto(gg.codigo, gg.nombre, gg.descripcion, gg.costo, gg.total, gg.siguiente, gg.anterior);
        } else {
            while(gg.siguiente.codigo != code){
                gg = gg.siguiente;
            }
    
            if (gg.siguiente.codigo === code){
                var x = new Producto (gg.siguiente.codigo, gg.siguiente.nombre, gg.siguiente.descripcion, gg.siguiente.cantidad, gg.siguiente.costo, gg.siguiente.total, gg.siguiente.siguiente, gg.siguiente.anterior)
                try{
                    gg.siguiente = gg.siguiente.siguiente
                    gg.siguiente.anterior = gg
                } catch(error){
                    return x;
                }
                return x;
            } 
        } 
        
    }

    delFirst(){
        if(this.inicio != null){
            let producto = new Producto (this.inicio.codigo, this.inicio.nombre, this.inicio.descripcion, this.inicio.cantidad, this.inicio.costo)
            this.inicio = this.inicio.siguiente;
            try {
                this.inicio.anterior = null;
            } catch (error){}
            return producto;
        }
        
    }


    searchProd(code){
        let gg = this.inicio
        while (gg.codigo != code){
            gg = gg.siguiente;
        }
        if (gg.codigo === code){
            return gg.nombre;
        }
    }

    changePos(newProd, pos){
        let gg = this.inicio;
        if(pos === 1){
            this.addFirst(newProd);
        } else {
            let aux = 1;
            while ((aux + 1) != pos){
                if (gg.siguiente != null){
                    gg = gg.siguiente
                    aux++;
                } else {
                    alert('Esa posicion no existe');
                    break;
                }
            }
            
            if ((aux+1) === pos){
                newProd.siguiente = gg.siguiente;
                newProd.anterior = gg;
                gg.siguiente.anterior = newProd;
                gg.siguiente = newProd;
            }
        }
    }

    listProds(){
        let concat = "";
        let gg = this.inicio
        while (gg != null){
            concat += `
            <p>Codigo:${gg.codigo}\n</p>
            <p>Nombre:${gg.nombre}\n</p>
            <p>Descripcion:${gg.descripcion}\n</p>
            <p>Cantidad:${gg.cantidad}\n</p>
            <p>Costo:${gg.costo}\n</p> \n
            <p>Total: ${gg.cantidad * gg.costo}</p>
            <p>------------------------------</p>`
            gg = gg.siguiente
        }
        return concat
    }

    listProdsInverse(){
        let gg = this.inicio
        let aux = 1;
        while(gg.siguiente != null){
            gg= gg.siguiente
            aux++;
        }
        let concat = `
        <p>Codigo:${gg.codigo}\n</p>
        <p>Nombre:${gg.nombre}\n</p>
        <p>Descripcion:${gg.descripcion}\n</p>
        <p>Cantidad:${gg.cantidad}\n</p>
        <p>Costo:${gg.costo}\n</p> \n
        <p>Total: ${gg.cantidad * gg.costo}</p>
        <p>------------------------------</p>`
        aux = aux -1;
        while (aux>0){
            let index = 1;
            gg = this.inicio
            while (index < aux){
                gg = gg.siguiente
                index++;
            }

            concat += `
            <p>Codigo:${gg.codigo}\n</p>
            <p>Nombre:${gg.nombre}\n</p>
            <p>Descripcion:${gg.descripcion}\n</p>
            <p>Cantidad:${gg.cantidad}\n</p>
            <p>Costo:${gg.costo}\n</p> \n
            <p>Total: ${gg.cantidad * gg.costo}</p>
            <p>------------------------------</p>`
            aux--;
        }
        return concat
    }





}