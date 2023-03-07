import db from '../databases/db.js'
import { getPosts } from '../repositories/userRepository.js'

export async function getUserPosts(req, res) {
    const {id} = req.params

    try {

        const user = await getPosts(id)
        
        return res.send(user.rows[0])
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }

}