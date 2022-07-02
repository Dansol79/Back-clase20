import dotenv from 'dotenv';
dotenv.config();
 
let productosDao
let carritosDao

switch (process.env.MONGO_CONNECTION) {
    case 'mongodb':
        import('./productos/MongoDBProductos.js').then(({MongoDBProductos}) => {
            productosDao = new MongoDBProductos();
            console.log('Conectado a MongoDBProductos');
        });
        import('./carritos/MongoDBCarritos.js').then(({MongoDBCarritos}) => {
            carritosDao = new MongoDBCarritos();
            console.log('Conectado a MongoDBCarritos');
        });
        break;

    default:
        break;
}

export { productosDao, carritosDao };