import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;



import { esPrimo } from './primo.js';

const numero = 7;
const resultado = esPrimo(numero);

console.log(`¿El número ${numero} es primo? ${resultado ? 'Sí' : 'No'}`);
