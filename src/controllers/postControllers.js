import db from '../databases/db.js'
import { like } from '../repositories/postsRepository.js'

export async function likePost(req, res) {
    const {id} = req.params
    try {
        like(id)
        return res.send()
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }

   
}