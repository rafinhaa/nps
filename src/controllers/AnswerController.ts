import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnswerController {
    /**
     * http://localhost:15000/answers/1?u=6fa2e7d1-8349-4270-a6da-b6d469e9aeae
     * Route Params => Parametros que compoem a rota
     * route.get("/answers/:value") answers/1
     * 
     * Query Params => Busca, Paginação (não são obrigatorios)
     * chave=valor === u=6fa2e7d1-8349-4270-a6da-b6d469e9aeae
     * 
     */
    async execute(request: Request, response: Response){
        const {value} = request.params;
        const {u} = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({ 
            id: String(u)
        });
        if(!surveyUser){
            throw new AppError("Survey User does not exists!");
        }
        surveyUser.value = Number(value);
        await surveysUsersRepository.save(surveyUser);
        return response.json(surveyUser);
    }
}

export { AnswerController };