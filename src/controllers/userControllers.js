
import { getPosts, getUsers } from '../repositories/userRepository.js'

export async function getAllUsers(req, res) {
    try {
        const users = await getUsers()

        return res.send(users.rows)
    } catch (error) {
        
    }

}

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