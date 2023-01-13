import { Request, Response } from "express";
import { userServices } from "../service/User.service";


export class UserController{
    async create(req : Request, res : Response){

        //#region swagger
        /* #swagger.parameters['obj'] = {
            in: 'body',
            description: 'Cadastro de usuário no sistema.',
            required: true,
            type: 'string',
            format: 'string',
            '@schema':{
                'required' : ['cpf', 'firstName'],
                'properties' : {
                    'cpf' : {
                        'type': 'string', 
                        'minLength': 11, 
                        'maxLength': 11, 
                        'example': '12345678910'
                    },
                    'firstName' : {
                        'type': 'string', 
                        'minLength': 3, 
                        'maxLength': 250, 
                        'example': 'Jhonny'
                    },
                    'lastName' : {
                        'type': 'string', 
                        'minLength': 3, 
                        'maxLength': 250, 
                        'example': 'White'
                    }
                }
            }
        } */
        //endregion
        const {cpf, firstName, lastName} = req.body;

        var isCreated : boolean = await userServices.isCreate(cpf);

        if(isCreated){
            return res.status(400).json({
                success : false,
                message : "cpf vinculado a um usuário cadastrado no sistema!",
                data: []
            });
        }

        try {
            const newUser = userServices.create({
                cpf,
                firstName,
                lastName 
            });

            await userServices.save(newUser).then(() => {

                return res.status(201).json({
                    success : true,
                    message : "Usuário criado com sucesso!",
                    data : newUser
                });

            })
            

        } catch (error) {
            return res.status(500).json({
                success : false,
                message : "Internal server error",
                data : []
            })
        }
    }
}