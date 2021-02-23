import {Router} from 'express';
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

// 1 Parametro => Rota (Recurso API)
// 1 Parametro => request,response
router.post("/users", userController.create);

export {router}