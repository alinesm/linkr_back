import { getPost, getPostHashtags, getPostsList, likePostById, publishNewPost, deletePostQuery, verifyPostOwner, getComments} from "../repositories/postsRepository.js"
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
        
        return res.send(hashtags.rows)
    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)

    }

}

export async function getAllPosts(req, res) {

    try {
        const postsList = await getPostsList();
       
        if(!postsList) return res.status(404).send("No posts found");
        for(let i = 0; i < postsList.rows.length; i++) {
            const meta = await urlMetadata(postsList.rows[i].link)
            

            const hashtags = await getPostHashtags(postsList.rows[i].id)
            const comments = await getComments(postsList.rows[i].id)

            
            
            postsList.rows[i].title = meta.title,
            postsList.rows[i].image = meta.image,
            postsList.rows[i].postDescription = meta.description,
            postsList.rows[i].hashtags = hashtags.rows
            postsList.rows[i].comments = comments.rows
            postsList.rows[i].seeComment = false
        }
        

        return res.status(200).send(postsList.rows);

    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)
    }
}

export async function newPost(req, res) {
    // const { userId } = res.locals;
    const { description, link, userId} = req.body;

    try {
        if(userId && description && link){
           
            await publishNewPost(userId, description, link);
            return res.sendStatus(200);
        }
        return res.status(400).send("Unable to publish");
    } catch (error) {
        console.log(error.message)
        return res.status(500).send(error.message)
    }

}

export async function deletePost(req, res) {
    const id = req.params.id;
    const userId = res.locals.userId;
    
    try {
        //verifica se o post é do usuario
       
        const usersPost = await verifyPostOwner(userId, id);
        if(usersPost.rowCount === 0) return res.status(401).send("Unauthorized");
        const post = await deletePostQuery(id);
        if(post === false) return res.status(404).send("Post not found");
        return res.status(200).send("Post deleted");
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function editPost(req, res) {
    
}

export async function getPostComments(req, res) {
    const {id} = req.params
    
    try {
        const comments = await getComments(id)
      
        return res.send(comments.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}