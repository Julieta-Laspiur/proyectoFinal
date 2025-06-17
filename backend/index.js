import express from 'express';
import config from './config.js';
import mongoose from 'mongoose';
import configureDependencies from './configure_dependencies.js';
import configureMiddleware from './middlewares/configure_middleware.js';


if (!config.jwtKey){
    console.error(`No se ha definido un jwtKey en la configuración. Por favor cree un archivo config.local.js.`);
    process.exit(1);
}

const app = express();
mongoose.connect(config.dbConnction)
    .then(()=> console.log('Conexión exitosa a MongoDB'))
    .catch(error => console.error('Error al conectar:', error));

const app = express();
const router = express.Router();
app.use('/api', router);


configureMiddleware(router);
configureDependencies();




app.listen( 
    config.port,
    () => {
        console.log(`Servidor corriendo en http://localhost:${config.port}`);
    }
);
