import { Request, Response } from "express";
import { AccountService } from "../service/Account.service";

export class AccountController{
    async create(req : Request, res : Response){
        const { userCpf , email, accountPassword } = req.body;

        const isCreated : boolean =  await AccountService.isCreated(userCpf);

        if(isCreated){
            return res.status(400).json({
                success : false,
                message : "cpf vinculado a uma conta cadastrada no sistema!",
                data : []
        });
        }

        try {
            const newAccount  = AccountService.create({
                userCpf,
                email,
                accountPassword
            });

            await AccountService.save(newAccount).then(() => {
                return res.status(201).send({
                    success : true,
                    message : "Conta criada com sucesso!",
                    data : newAccount
                });
            });

        } catch (error) {
            return res.status(500).json({
                success : false,
                message : "Internal server error",
                data : []
            })
        }
    }
}