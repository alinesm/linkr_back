import urlMetadata from 'url-metadata'
import { hashtagsByPost } from '../repositories/hashtagsRepository.js'
import { getPostHashtags } from '../repositories/postsRepository.js'
import { findFollow, getPosts, getUsers, insertFollow, findUserById, deleteFollow } from '../repositories/userRepository.js'

export async function getAllUsers(req, res) {
    try {
        const users = await getUsers()

        return res.send(users.rows)
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }

}

export async function getUserPosts(req, res) {
    const { id } = req.params
    console.log(id)
    try {

        const posts = await getPosts(id)



        if (posts.rowCount === 0) return res.send(["Este usuário não tem nenhum post"])

        for (let i = 0; i < posts.rows[0].posts.length; i++) {
         
            const hashtags = await getPostHashtags(posts.rows[0].posts[i].id)

           // const hashtagsString = hashtags.rows.map(objeto => objeto.text).join(' ');       
           

            const meta = await urlMetadata(posts.rows[0].posts[i].link)
            posts.rows[0].posts[i].title = meta.title,
                posts.rows[0].posts[i].image = meta.image,
                posts.rows[0].posts[i].postDescription = meta.description,
                posts.rows[0].posts[i].hashtags = hashtags.rows


        }


        return res.send(posts.rows[0])

    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }

}

export async function followUser(req,res){
    try{
        const { followerId, followedId } = req.body
        const followerExists = await findUserById(followerId)
        const followedExists = await findUserById(followedId)
        if(followerExists.rows.length === 0 || followedExists.rows.length === 0){
            return res.sendStatus(400)
        }
        const follow = await findFollow(followerId,followedId)
        if(follow.rows.length === 0){
            await insertFollow(followerId,followedId)
            return res.sendStatus(201)
        }else{
            return res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
        return res.status(500).send(error.message)
    }
}

export async function unfollowUser(req,res){
    try{
        const { followerId, followedId } = req.body
        const followerExists = await findUserById(followerId)
        const followedExists = await findUserById(followedId)
        if(followerExists.rows.length === 0 || followedExists.rows.length === 0){
            return res.sendStatus(400)
        }
        const follow = await findFollow(followerId,followedId)
        if(follow.rows.length !== 0){
            await deleteFollow(followerId,followedId)
            return res.sendStatus(205)
        }else{
            return res.sendStatus(400)
        }
    }catch(error){
        return res.status(500).send(error.message)
    }
}

export async function findFollowRelation(req,res){
    try{
        const { followerId, followedId } = req.body
        const followerExists = await findUserById(followerId)
        const followedExists = await findUserById(followedId)
        if(followerExists.rows.length === 0 || followedExists.rows.length === 0){
            return res.sendStatus(400)
        }
        const follow = await findFollow(followerId,followedId)
        if(follow.rows.length === 0){
            return res.status(202).send([])
        }
        return res.status(202).send(["exists"])
    }catch(error){
        return res.status(500).send(error.message)
    }
}