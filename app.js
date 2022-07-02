import express from 'express';
import productosRouter from './routers/ProductosRouter.js'
import carritosRouter from './routers/carritos/CarritosRoutes.js';
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/productos', productosRouter);
app.use('/api/carritos', carritosRouter);

// Config de servidor
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
})
