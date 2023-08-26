import { Schema, model } from "mongoose";

const blogSchema=new Schema({
    Name:{
        type:'String',
        required:true
        
    },
    Place:{
        type:'String',
        required:true
        
    },
    Content:{
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