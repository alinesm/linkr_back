import db from '../databases/db.js'

export async function getUsers() {
    return db.query(`SELECT id, user_name,image_url  FROM users`)
}

export async function getPosts(id) {

    return await  db.query(`SELECT users.id, users.image_url, users.user_name , json_agg(posts) AS posts
        FROM users 
        JOIN posts  ON users.id = posts.user_id
        WHERE users.id = $1
        GROUP BY users.id;`, [id])
}

export async function insertFollow(followerId,followedId){
    return db.query(`
        INSERT INTO follows 
        (follower,followed,created_at)
        VALUES ($1,$2,NOW())
    `,[followerId,followedId])
}

export async function findFollow(followerId,followedId){
    return db.query(`
        Select * FROM follows
        Where follower = $1 AND followed = $2
    `,[followerId,followedId])
}

export async function findFollower(followerId){
    return db.query(`
        Select * FROM follows
        Where follower = $1
    `,[followerId])
}

export async function findUserById(id){
    return db.query(`
        SELECT * FROM users
        WHERE id = $1
    `,[id])
}

export async function deleteFollow(followerId,followedId){
    return db.query(`
        DELETE FROM follows
        WHERE follower = $1 AND followed = $2
    `,[followerId,followedId])
}