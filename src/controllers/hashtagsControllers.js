import {
  hashtagsByPost,
  listPostsByhashtag,
  trending,
} from "../repositories/hashtagsRepository.js";

export async function getTrending(req, res) {
  try {
    const result = await trending();

    return res.send(result.rows.map((r) => r.text));
  } catch (error) {
    console.log(error);
  }
}

export async function listHashtagsByPost(req, res) {
  const { idPost } = req.params;

  try {
    const result = await hashtagsByPost(idPost);
    return res.send(result.rows.map((r) => r.text));
  } catch (error) {
    console.log(error);
  }
}

export async function showPostsByHashtag(req, res) {
  const { hashtag } = req.params;
  

  try {
    const result = await listPostsByhashtag(hashtag);
   
    return res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
}
