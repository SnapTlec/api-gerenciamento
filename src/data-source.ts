import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from "typeorm";



const PORT = process.env.BD_PORT as number | undefined;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.BD_HOST,
    port: PORT,
    username: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    synchronize: true,
    logging: false,
})