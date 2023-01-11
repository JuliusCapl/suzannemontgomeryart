import axios from "axios";

export const createPost = async (form) => {
    try {
        const res = await axios.post('/api/newPost', form)
        return res.data
    } catch (error) {
        console.log(error)
    }
}