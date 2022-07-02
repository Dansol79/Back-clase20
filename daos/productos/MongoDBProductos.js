import MongoClass from "../../contenedores/MongoClass.js";
import { productoSchema } from "../../models/productoSchema.js";

export class MongoDBProductos extends MongoClass {
    constructor() {
        super("productos", productoSchema);
    }
}

