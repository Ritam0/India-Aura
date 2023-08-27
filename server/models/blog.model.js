import { Schema, model } from "mongoose";

const blogSchema=new Schema({
    name:{
        type:'String', 
        required:true
        
    },
    title:{
        type:'String', 
        required:true
        
    },
    place:{
        type:'String',
        required:true
        
    },
    content:{
        type:'String',
        required:true
        
    },
    thumbnail:{
        public_id:{
            type:'String'
        },
        secure_url:{
            type:'String'
        }
    }
});
const Blog=model('Blog',blogSchema);
export default Blog;