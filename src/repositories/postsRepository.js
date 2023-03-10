import db from '../databases/db.js'

export function getPost(id) {
    return db.query(`SELECT likes.post_id, users.user_name FROM likes JOIN users on users.id = likes.user_id WHERE post_id = $1`, [id])
}

export function getPostHashtags(id) {
    return db.query(`SELECT hashtags.text, posts.id FROM hashtag_posts 
    JOIN posts ON posts.id = hashtag_posts.post_id 
    JOIN hashtags ON hashtags.id = hashtag_posts.hashtag_id
    WHERE post_id = $1`,[id])

}

export async function likePostById(userId, postId) {

    const isLiked = await db.query(`SELECT * FROM likes where post_id= $1 AND user_id = $2`, [postId, userId])

    if (isLiked.rowCount > 0) {
        return await db.query(`DELETE FROM likes WHERE post_id= $1 AND user_id = $2`, [postId, userId])
    }

    return await db.query(`INSERT INTO likes (post_id, user_id) VALUES ($1, $2)`, [postId, userId])
}

export async function getPostsList(){
    return await db.query(`SELECT * FROM posts ORDER BY $1 DESC`, ["id"]);
}

export async function publishNewPost(userId, description, link) {
    return db.query(`INSERT INTO posts (user_id, description, link) VALUES ($1, $2, $3)`, [userId, description, link]);    
}

export async function deletePostQuery(postId){
    let existPost = await db.query(`SELECT * FROM posts WHERE id = $1`, [postId]);
    if(existPost.rowCount === 0) return false;
    return await db.query(`DELETE FROM posts WHERE id = $1`, [postId]);
}

export async function verifyPostOwner(userId, postId){
    return await db.query(`SELECT * FROM posts WHERE id = $1 AND user_id = $2`, [postId, userId]);
}

export async function updatePost(postId, link, description){
    return await db.query(`UPDATE posts SET link = $1, description = $2 WHERE id = $3`, [link, description, postId]);
}