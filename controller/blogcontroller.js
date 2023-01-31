const blog = require ("../models/blog");

const createBlog =async (req,res)=>{
    try {
        const {blogname,blogdescription} = req.body
        const post = await blog.create(
            blogname,
            blogdescription
        )
        res.status(200).json(post)
    } catch (error) {
        console.log({error:error.message})
    }
} 
const singleblog = async (req,res) =>{
    const id = req.params._id
    const getblog = await blog.findById(id)
    res.status(200).json(getblog)
}   

module.exports = {createBlog,singleblog}