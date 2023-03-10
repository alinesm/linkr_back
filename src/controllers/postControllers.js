import { getPost, getPostHashtags, likePostById } from "../repositories/postsRepository.js"
import urlMetadata from "url-metadata"
import { hashtagsByPost } from "../repositories/hashtagsRepository.js"


export async function getPostById(req, res) {

    const { id } = req.params


    try {
        const getPosts = await getPost(id)



        return res.send(getPosts.rows)
    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)

    }

}

export async function likePost(req, res) {
    const { postId } = req.params

    const userId = res.locals.userId


    try {
        await likePostById(userId, postId)
        return res.send()

    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)

    }

}

export async function getHashtags(req, res) {
    const { id } = req.params

    try {
        const hashtags = await getPostHashtags(id)
        console.log(hashtags.rows)
        return res.send(hashtags.rows)
    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)

    }

}
