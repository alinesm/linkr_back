import db from '../databases/db.js'

export async function getUsers() {
    return db.query(`SELECT id, user_name,image_url  FROM users`)
}

export async function getPosts(id) {

    return await  db.query(`SELECT users.*, json_agg(posts) AS posts
        FROM users 
        JOIN posts  ON users.id = posts.user_id
        WHERE users.id = $1
        GROUP BY users.id;`, [id])
}