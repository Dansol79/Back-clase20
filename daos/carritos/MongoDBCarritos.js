import MongoClass from "../../contenedores/MongoClass.js";
import {carritosSchema} from "../../models/carritosSchema.js";
import { productosDao } from "../index.js";

export class MongoDBCarritos extends MongoClass {
    constructor() {
        super('carritos', carritosSchema);
    }

    async addProducto(carrito, producto) {
       productos.forEach(producto => {

        const productoEnCarrito = carrito.productos.find(p => p._id == producto._id);
        if(productoEnCarrito) {
            productoEnCarrito.cantidad ++;
        }else{
            carrito.productos.push(producto);
        }

       });
       const carritoActualizado = await this.collection.findByIdAndUpdate(carrito._id, {productos: carrito.productos});
       return carritoActualizado;
    }
    async deleteProducto(carrito, productoId) {
        const productoEnCarrito = carrito.productos.find(p => p._id == productoId);
        if(productoEnCarrito) {
            productoEnCarrito.cantidad > 1? productoEnCarrito.cantidad --: carrito.productos = carrito.productos.filter(p => p._id != productoId);
        }else{
            throw new Error('El producto no existe en el carrito');
        }
        const carritoActualizado = await this.collection.findByIdAndUpdate(carrito._id, {productos: carrito.productos});
            
        }
        
}