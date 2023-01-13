import 'dotenv/config';
import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routers/index.router';

import swaggerUi from 'swagger-ui-express';

import * as swaggerFile from './docs/swagger_output.json';

AppDataSource.initialize().then(() => {
    console.log("Servidor de banco de dados online e disponível na porta: " + process.env.BD_PORT);
    
    const app = express();
    app.use(express.json());

    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    
    app.use(routes);

    app.listen(process.env.APP_PORT, () => {
        console.log(`Servidor de aplicação online e disponível na porta: ${process.env.APP_PORT}`)
    });

}).catch(
    (error) => console.log(error)
)
    