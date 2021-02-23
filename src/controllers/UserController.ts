import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
    async create(request: Request, response: Response){
        //const body = request.body;
        const {name, email} = request.body;
        
        const userRepository = getRepository(User);

        // SELECT * FROM users WHERE email = 'email'
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        if(userAlreadyExists){
            return response.status(400).json({
                error: "User already exists!"
            });
        }

        const user = userRepository.create({
            name, email
        });

        await userRepository.save(user);

        return response.json(user);
    }
}

export {UserController}