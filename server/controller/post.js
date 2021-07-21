import postMessage from "../models/postMessage.js"


export const getPosts = async (req, res) => {
    try {
        const posts = await postMessage.find();
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(404).json({error: error})
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = await postMessage(body);
    try {
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        res.status(409).json({error: error})
    }
}
