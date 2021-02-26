//Database
import 'reflect-metadata' 
import express, { NextFunction, request, response } from 'express';
// Utilizar biblioteca de tipos para o express (em desenvolvimento): yarn add @types/express -D
// Utilizar biblioteca do TypeScript para interpretar e poder compilar o JS: yarn add typescript -D
// Para iniciar a bilbioteca do TS, utilizar: yarn tsc --init
// Biblioteca TS-node-dev para converter código em tempo de execução: yarn add ts-node-dev -D

import "express-async-errors";

//Não precisa especificar o index.ts
import createConnection from "./database";
import { router } from './routes';
import { AppError } from './errors/AppError';

createConnection();
const app = express();

app.use(express.json());
app.use(router);
app.use( ( err: Error, request: express.Request, response: express.Response, _next: NextFunction) =>{
    if(err instanceof AppError)  {
        return response.status(err.statusCode).json({
            message: err.message
        })
  }
  return response.status(500).json({
      status: "Error",
      message: `Internal server error ${err.message}`
  })
});
export {app};