import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController {
    async create(request: Request, response: Response){
        //const body = request.body;
        const {name, email} = request.body;
        const schema = yup.object().shape({
            name: yup.string().required("Mensagem para exibir"),
            email: yup.string().email().required(),
          });

        try {
            await schema.validate(request.body, {abortEarly: false});
        }catch(err){
            return response.status(400).json({
                error: err
            });
        }
          /*
          if(!(await schema.isValid(request.body))){
                return response.status(400).json({
                    error: "Validation failed!"
                })
          }*/
        
        const userRepository = getCustomRepository(UsersRepository);

        // SELECT * FROM users WHERE email = 'email'
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new AppError("User already exists!");
        }

        const user = userRepository.create({
            name, email
        });

        await userRepository.save(user);

        return response.status(201).json(user);
    }
    async get(request: Request, response: Response){
        const {name, email} = request.body;
        const userRepository = getCustomRepository(UsersRepository);

        // SELECT * FROM users WHERE email = 'email'
        const user = await userRepository.find();

        return response.status(201).json(user);
    }
}

export { UserController };
