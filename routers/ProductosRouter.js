import {Router} from 'express';
import { productosDao as api} from '../daos/index.js';

const productosRouter = Router();

productosRouter.get('/', async (req, res) => {
    try{
        const productos = await api.getAll();
        productos? res.status(200).json(productos) : res.status(404).json({message: 'No hay productos'});
    
    }catch(error){
        res.status(500).send({mensaje: error.message});
    }
})

productosRouter.get('/:id', async (req, res) => {
    try{
        const producto = await api.getById(req.params.id);
        producto? res.status(200).json(producto) : res.status(404).json({message: 'No hay producto'});
    
    }catch(error){
        res.status(500).send({mensaje: error.message});
    }
})

productosRouter.post('/', async (req, res) => {
    try{
        const nuevoProducto = await api.save(req.body);
        res.status(201).json({
            message: 'Producto creado con éxito',
            producto: nuevoProducto});
    }catch (err){
        res.status(500).json({message: err.message});
    }
})

productosRouter.put('/:id', async (req, res) => {
    try{
        const producto = await api.update(req.params.id, req.body);
        producto? res.status(200).json(producto) : res.status(404).json({message: 'No se pudo actualizar el producto'});
    
    }catch(error){
        res.status(500).send({mensaje: error.message});
    }
})

productosRouter.delete('/:id', async (req, res) => {
    try{
        const producto = await api.delete(req.params.id);
        producto? res.status(200).json(producto) : res.status(404).json({message: 'No se pudo eliminar el producto'});
    
    }catch(error){
        res.status(500).send({mensaje: error.message});
    }
})


export default productosRouter;