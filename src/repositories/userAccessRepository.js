import db from '../databases/db.js'

export async function findUser(user_name, email) {
    return db.query(`
        SELECT * FROM users 
        WHERE user_name=$1 
        OR email=$2
    `, [user_name, email]);
}

export async function findUserByEmail(email) {
    return db.query(`
        SELECT * FROM users 
        WHERE email=$1
    `, [email]);
}

export async function insertUser(email, user_name, image_url, hashPassword) {
    return db.query(`
        INSERT INTO users (email,user_name,image_url,password,created_at)
        VALUES ($1,$2,$3,$4,NOW());
    `, [email, user_name, image_url, hashPassword]);
}

export async function deleteSession(user){
    return db.query(`
        DELETE FROM sessions 
        WHERE user_id = $1
    `,[user.rows[0].id]);
}

export async function insertSession(token,user){
    return db.query(`
        INSERT INTO sessions 
        (token, user_id, created_at) 
        VALUES ($1, $2,NOW())
    `,[token,user.rows[0].id]);
}