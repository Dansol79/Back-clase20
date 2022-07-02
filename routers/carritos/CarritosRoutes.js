import {application, Router} from 'express';
import { carritosDao as api } from '../../daos/index.js';
const carritosRouter = Router();

carritosRouter.get('/', async (req, res) => {
    try{
        const carritos = await api.getAll();
        carritos? res.status(200).json(carritos) : res.status(404).json({message: 'No hay carritos'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
    
});

carritosRouter.get('/:id', async (req, res) => {
    try{
        const carrito = await api.getById(req.params.id);
        carrito? res.status(200).json(carrito) : res.status(404).json({message: 'No hay carrito'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});
carritosRouter.post('/', async (req, res) => {
    try{
        const nuevoCarrito = await api.save(req.body);
        res.status(201).json({
            message: 'Carrito creado con éxito',
            carrito: nuevoCarrito});
    }catch (err){
        res.status(500).json({message: err.message});
    }
});
// Listar productos del carrito
carritosRouter.get('/:id/productos', async (req, res) => {
    try{
        const carrito = await api.getById(req.params.id);
        const productos = await req.body;
        if(carrito && productos){
            const carritoUpdate = await api.addProducto(carrito, productos);
            const newCarrito = await api.getById(carritoUpdate._id);
            res.status(200).json({
                message: 'Productos agregados al carrito',
                carrito: newCarrito});
            }
        if(!carrito){
            res.status(404).json({message: 'No hay carrito'});
        }
        if(!productos){
            res.status(404).json({message: 'No hay productos en el carrito'});
        }
        }catch(error){
            res.status(500).json({message: error.message});

        }
});

//borrar producto del carrito
carritosRouter.delete('/:id/productos/:productoId', async (req, res) => {
    try{
        const carrito = await api.getById(req.params.id);
        const productoId = req.params.productoId;
        if(carrito && productoId){
            const carritoUpdate = await api.deleteProducto(carrito, productoId);
            const newCarrito = await api.getById(carritoUpdate._id);
            res.status(200).json({
                message: 'Producto eliminado del carrito',
                carrito: newCarrito});
        }
        if(!carrito){
            res.status(404).json({message: 'No hay carrito'});
        }
        if(!productoId){
            res.status(404).json({message: 'No hay producto en el carrito'});
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
});




export default carritosRouter;