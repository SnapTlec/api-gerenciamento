import Joi from "joi";


const accountSchema = Joi.object({
    cpf : Joi.string()
            .alphanum()
            .min(11)
            .max(11)
            .required(),
    email : Joi.string()
                .email({minDomainSegments : 2, tlds : {allow : ["com", "br"]}}),
    accountPassword : Joi.string()
                        .pattern(new RegExp('[\w\d.]{8,22}'))
});

export default accountSchema;