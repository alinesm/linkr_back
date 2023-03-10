import urlMetadata from 'url-metadata'
import { getPosts, getUsers } from '../repositories/userRepository.js'

export async function getAllUsers(req, res) {
    try {
        const users = await getUsers()

        return res.send(users.rows)
    } catch (error) {

    }

}

export async function getUserPosts(req, res) {
    const { id } = req.params
    try {

        const posts = await getPosts(id)

        for(let i = 0; i < posts.rows[0].posts.length; i++) {
            
            const meta = await urlMetadata(posts.rows[0].posts[i].link)

            posts.rows[0].posts[i].title = meta.title,
            posts.rows[0].posts[i].image = meta.image,
            posts.rows[0].posts[i].postDescription = meta.description

            console.log(meta)
        }


        return res.send(posts.rows[0])

    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }

}