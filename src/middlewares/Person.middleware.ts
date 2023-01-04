import express, { NextFunction, Request, Response } from "express";
import personSchema from "../models/Person.model";


const router = express.Router();
 
const validationMiddleware = (request : Request, response : Response, next : NextFunction) => {
  const { error } = personSchema.validate(request.body)
  const valid = error == null; 
 
  if (valid) { 
    next(); 
  } else {
    const {details} = error;
    const message = details.map(i => i.message).join(',') 
    response.status(422).json({ 
        error: message 
    })
  } 
}

export default validationMiddleware;