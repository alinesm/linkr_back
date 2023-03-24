import db from '../databases/db.js'

export function getPost(id) {
    return db.query(`SELECT likes.post_id, users.user_name 
    FROM likes 
    JOIN users on users.id = likes.user_id 
    WHERE post_id = $1`, [id])
}

export function getComments(id) {
    console.log(id)
    return db.query(`SELECT users.id as user_id, users.image_url as user_avatar, users.user_name, comments.id as comment_id, comments.comment 
    FROM comments 
    JOIN users 
    ON users.id = user_id 
    WHERE post_id = $1`, [id])
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
    return await db.query(`SELECT posts.*, users.id AS user_id, users.image_url, users.user_name FROM posts JOIN users ON users.id = posts.user_id ORDER BY $1 DESC`, ["id"]);
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