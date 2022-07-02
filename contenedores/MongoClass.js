import mongoose from "mongoose";
import config from "../config/config.js";

mongoose.connect(config.mongodb.URL, config.mongodb.options);


class MongoClass {
    constructor(collectionName, docSchema) {
        this.collection = mongoose.model(collectionName, docSchema);
    }

    async getAll() {
        try {
            const todos = await this.collection.find({});
            return todos;
        } catch (error) {
            throw new Error('Error al obtener todos los documentos', error);
        }
    }
    async getById(id) {
        try{
            const producto = await this.collection.findById(id);
            return producto;
        }catch(error){
            throw new Error('Error al obtener el documento por id', error);
        }
    }
   async save (obj){
        try{
            const newProducto = await this.collection.create(obj);
            return newProducto;
        }catch(error){
            
            throw new Error(`Error al guardar el documento ${error}`);
            
        }
    }


    async update(id, data){
        try{
            const updateData = await this.collection.findByIdAndUpdate(id, data);
            return updateData;
        }catch(error){
            throw new Error('Error al actualizar el documento', error);
        }
    }

    async delete(id){
        try{
            const deleteProducto = await this.collection.findByIdAndDelete(id);
            return deleteProducto;
        }catch(error){
            throw new Error('Error al eliminar el documento', error);
        }
    }
}

export default MongoClass;