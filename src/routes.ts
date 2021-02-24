import {Router} from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

/**
 * GET    => Buscas
 * POST   => Salvar
 * PUT    => Alterar
 * DELETE => Deletar
 * PATCH  => Alteracao especifica
 */

 //Routes 
const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();

// 1 Parametro => Rota (Recurso API)
// 1 Parametro => request,response
router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

export {router}