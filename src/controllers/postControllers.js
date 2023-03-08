import { getPost, likePostById } from "../repositories/postsRepository.js"


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
        const like = await likePostById(userId, postId)
        return res.send()

    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)

    }





}