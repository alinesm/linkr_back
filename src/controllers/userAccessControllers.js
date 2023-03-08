import db from '../databases/db.js'
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { deleteSession, deleteSessionByToken, findUser, findUserByEmail, insertSession, insertUser } from '../repositories/userAccessRepository.js';

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

export async function signIn(req, res) {
    try {
        const {email, password} = req.body;
        const user = await findUserByEmail(email);
        console.log(bcrypt.compareSync(password, user.rows[0].password))
        if ((user.rows.length !== 0) && bcrypt.compareSync(password, user.rows[0].password)) {
            const token = uuid();
            await deleteSession(user);
            await insertSession(token,user);
            return res.status(200).send({token});
        } else {
            return res.sendStatus(401);
        }
    } catch (err) {
        return res.status(500).send(err.message);
    };
}

export async function logOut(req,res){
    try{
        const authorization = req.headers.authorization;
        const token = authorization.replace('Bearer ', '');
        if(!token){
            return res.sendStatus(401)
        }
        await deleteSessionByToken(token);
        return res.sendStatus(204)
    }catch(err){
        return res.status(500).send(err.message)
    }
}