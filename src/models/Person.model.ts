import Joi from 'joi';

const personSchema = Joi.object({
    cpf : Joi.string()
            .alphanum()
            .min(11)
            .max(11)
            .required(),
    firstName : Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
    lastName: Joi.string()
                .min(3)
                .max(30)
                .required()

});

export default personSchema;