import db from '../databases/db.js'

export function getPost(id) {
    return db.query(`SELECT likes.post_id, users.user_name FROM likes JOIN users on users.id = likes.user_id WHERE post_id = $1`, [id])
}