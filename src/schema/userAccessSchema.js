import joi from 'joi';

export const SignUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    user_name: joi.string().required(),
    image_url: joi.string().uri().required()
});