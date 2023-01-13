import express, { NextFunction, Request, Response } from "express";
import personSchema from "../models/Person.model";

 
function personValidationMiddleware(request: Request, response: Response, next: NextFunction) {
  const { error } = personSchema.validate(request.body);
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map(i => i.message).join(',');
    return response.status(422).json({
      message: message,
      data : []
    });
  }
}

export default personValidationMiddleware;