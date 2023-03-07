import db from '../databases/db.js'

export async function like(id) {
    return db.query(`UPDATE posts SET liked = true WHERE id = $1`, [id])

}