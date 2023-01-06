import { Request, Response } from "express";
import { userServices } from "../service/User.service";


export class UserController{
    async create(req : Request, res : Response){
        const {cpf, firstName, lastName} = req.body;

        var isCreated : boolean = await userServices.isCreate(cpf);

        if(isCreated){
            return res.status(400).json({
                message : "cpf vinculado a um usuário cadastrado no sistema!"
            });
        }

        try {
            const newUser = userServices.create({
                cpf,
                firstName,
                lastName 
            });

            await userServices.save(newUser).then(() => {

                return res.status(201).send({
                    message : "Usuário criado com sucesso!",
                    data : newUser
                });

            })
            

        } catch (error) {
            return res.status(500).json({
                message : "Internal server error",
                data : []
            })
        }
    }
}