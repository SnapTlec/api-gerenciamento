import { NextFunction, Request, Response } from "express";
import accountSchema from "../models/Account.model";

function AccountValidationMiddleware(request : Request, response : Response, next : NextFunction){
    const { error } = accountSchema.validate(request.body);
    const valid = error == null;

    if(valid){
        next();
    } else{
        const { details } = error;
        const message = details.map(i => i.message).join(',');
        return response.status(422).json({
            message : message,
            data : []
        })
    }


}

export default AccountValidationMiddleware;