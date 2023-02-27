const Joi = require("joi");

module.exports = {
    userValidatation: async (req, res, next) => {
        const schema = Joi.object().keys({
            name: Joi.string().min(3).max(30).required(),
            phone: Joi.string().min(10).max(10).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().min(3).max(10).required(),
        })  
        const {error} = schema.validate(req.body,{abortEarly:false});
        if(error){
            res.status(400).json({error:error})
        }else{
            next();
        }
    }
};