import connection from "../databases/db.js";
// import db from "../databases/db.js";

// - hashtag.text deve ser unico?
// - as trendings sao todas as # ou as top 10?
// - como levar pro front as funcao que nao precisam de rota?

// Como usuário logado,
// quero ver as hashtags de cada post em destaque (negrito) no corpo do post

export function trending() {
  return connection.query(`select hashtags.text from hashtags`);
}

export function hashtagsByPost(id) {
  return connection.query(
    `select hashtags.text 
    from hashtag_posts 
    join hashtags 
    on hashtag_posts.hashtag_id = hashtags.id 
    where post_id=$1 ;`,
    [id]
  );
}

export function listPostsByhashtag(hashtag) {
  return connection.query(
    `SELECT users.image_url , users.user_name , posts.id as post_id, posts.description, hashtags.text
    FROM posts
    join users 
    on users.id = posts.user_id
    JOIN hashtag_posts hp 
    on posts.id = hp.post_id 
    join hashtags
    on hp.hashtag_id = hashtags.id
    WHERE hashtags.text = $1
    `,
    [hashtag]
  );
}
