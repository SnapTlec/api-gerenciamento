import 'dotenv/config';
import express from 'express';
import { AppDataSource } from './data-source';
import routes from './routers/index.router';

AppDataSource.initialize().then(() => {
    console.log("Servidor de banco de dados online e disponível na porta: " + process.env.BD_PORT);
    
    const app = express();
    app.use(express.json());

    app.use(routes);

    app.listen(process.env.APP_PORT, () => {
        console.log(`Servidor de aplicação online e disponível na porta: ${process.env.APP_PORT}`)
    });

}).catch(
    (error) => console.log(error)
)
    