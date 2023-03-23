import joi from 'joi';

export const followSchema = joi.object({
    followerId: joi.number().required(),
    followedId: joi.number().required()
});