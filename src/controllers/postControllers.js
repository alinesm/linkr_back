import { getPost } from "../repositories/postsRepository.js"


export async function getPostById(req, res) {

    const {id} = req.params

    try {
        const getPosts = await getPost(id)
        return res.send(getPosts.rows)
    } catch (error) {
        
    }

} 