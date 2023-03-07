import db from '../databases/db.js'

export async function getAllusers() {
    return db.query(`SELECT user_name FROM users`)
}

export async function getPosts(id) {

    return db.query(`SELECT users.*, json_agg(posts) AS posts
        FROM users 
        JOIN posts  ON users.id = posts.user_id
        WHERE users.id = $1
        GROUP BY users.id;`, [id])
}