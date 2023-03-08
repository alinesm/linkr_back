import db from '../databases/db.js'

export function getPost(id) {
    return db.query(`SELECT likes.post_id, users.user_name FROM likes JOIN users on users.id = likes.user_id WHERE post_id = $1`, [id])
}

export async function likePostById(userId, postId) {

    const isLiked = await db.query(`SELECT * FROM likes where post_id= $1 AND user_id = $2`, [postId, userId])

    if (isLiked.rowCount > 0) {
        return await db.query(`DELETE FROM likes WHERE post_id= $1 AND user_id = $2`, [postId, userId])
    }

    return await db.query(`INSERT INTO likes (post_id, user_id) VALUES ($1, $2)`, [postId, userId])
}