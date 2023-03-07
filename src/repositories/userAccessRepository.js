import db from '../databases/db.js'

export async function findUser(user_name,email) {
    return db.query(`
        SELECT * FROM users 
        WHERE user_name=$1 
        OR email=$2
    `,[user_name,email])
}

export async function insertUser(email,user_name,image_url,hashPassword){
    await db.query(`
        INSERT INTO users (email,user_name,image_url,password,created_at)
        VALUES ($1,$2,$3,$4,NOW());
    `,[email,user_name,image_url,hashPassword]);
}