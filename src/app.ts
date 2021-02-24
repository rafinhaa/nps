//Database
import 'reflect-metadata' 
import express from 'express';
// Utilizar biblioteca de tipos para o express (em desenvolvimento): yarn add @types/express -D
// Utilizar biblioteca do TypeScript para interpretar e poder compilar o JS: yarn add typescript -D
// Para iniciar a bilbioteca do TS, utilizar: yarn tsc --init
// Biblioteca TS-node-dev para converter código em tempo de execução: yarn add ts-node-dev -D

//Não precisa especificar o index.ts
import createConnection from "./database";
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export {app};