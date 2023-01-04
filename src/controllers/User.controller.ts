import { Request, Response } from "express";
import { userServices } from "../service/User.service";


export class UserController{
    async create(req : Request, res : Response){
        const {cpf, firstName, lastName} = req.body;

        if(!cpf || !firstName || !lastName){
            return res.status(400).json({
                message : "Os campos 'cpf', 'firstName' e 'lastName' são obrigatórios!"
            });
        }

        var isCreated : boolean = userServices.isCreate(cpf);

        if(!isCreated){
            return res.status(400).json({
                message : "cpf já vinculado a um usuário cadastrado no sistema!"
            })
        }

        try {
            const user = userServices.create({
                cpf,
                firstName,
                lastName 
            });

            await userServices.save(user).then(() => {

                res.status(201).json(user);

            })
            

        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message : "Internal server error"
            })
        }
    }
}