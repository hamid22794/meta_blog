import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    username: {
        type: String  
    },
    password: {
        type: String
    }
})


const Post = mongoose.model('posts', postSchema);
export default Post;