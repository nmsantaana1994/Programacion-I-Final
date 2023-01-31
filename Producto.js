//Clase para creación de productos

class Producto {

    //Propiedades privadas
    #id;
    #nombre;
    #descripcion;
    #precio;
    #imagen;
    #categoria;

    constructor (id, nombre, descripcion, precio, imagen, categoria) {
        this.#id = id;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#precio = precio;
        this.#imagen = imagen;
        this.#categoria = categoria;
    }
    
    //Seteo de propiedades
    set setID (id) {
        this.#id = id;
    }
    
    set setNombre (nombre) {
        this.#nombre = nombre;
    }
    
    set setDescripcion (descripcion) {
        this.#descripcion = descripcion;
    }
    
    set setPrecio (precio){
        this.#precio = precio;        
    }
    
    set setImagen (imagen) {
        this.#imagen = imagen;       
    }
    
    set setCategoria (categoria) {
        this.#categoria = categoria;        
    }

    //Obtencion de las propiedades
    get getID () {
        return this.#id;
    }

    get getNombre () {
        return this.#nombre;
    }

    get getDescripcion () {
        return this.#descripcion;
    }

    get getPrecio () {
        return this.#precio;
    }

    get getImagen () {
        return this.#imagen; 
    }

    get getCategoria () {
        return this.#categoria;
    }
}