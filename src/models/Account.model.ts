import Joi from "joi";


const accountSchema = Joi.object({
    userCpf : Joi.string()
            .alphanum()
            .min(11)
            .max(11)
            .required(),

    email : Joi.string()
                .email({
                        minDomainSegments : 2, 
                        tlds : {
                                allow : ["com", "br"]
                        }
                })
                .required(),

    accountPassword : Joi.string()
                        .pattern(new RegExp('[?~$*#@`|&%*/-/!a-zA-Z0-9.]{8,22}'))
                        .required()
});

export default accountSchema;