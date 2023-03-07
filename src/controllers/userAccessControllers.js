import db from '../databases/db.js'
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { findUser, insertUser } from '../repositories/userAccessRepository.js';

export async function signUp(req,res){
    try{
        const {email, password, user_name, image_url} = req.body;
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = await findUser(user_name,email)
        if(user.rows.length !== 0){
            return res.sendStatus(409)
        }
        await insertUser(email,user_name,image_url,hashPassword)
        return res.sendStatus(200)
    }catch(err){
        return res.status(500).send(err.message)
    }
}