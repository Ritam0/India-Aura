import Blog from "../models/blog.model.js";
import AppError from "../utils/error.util.js";


//..................upload blog...................//
 const upload_blog=async (req,res,next)=>{
    try{
        const {name,place,content}=req.body;
        if(!name || !place || !content){
            return next (new AppError('All data is required',400));
        }
        
        const blog=await Blog.create({
            name,
            place,
            content,
            thumbnail:{
                public_id:name,
                secure_url:process.env.DEMO
            }
        });
        console.log('4');
        if(!blog){
            return next(new AppError('registration faild!!!!',400));
        }
        //TODO:FILE UPLOAD
        console.log('File Details > ', JSON.stringify(req.file));
        if(req.file){
            try{
                const result = await cloudinary.v2.uploader.upload(req.file.path, {
                    folder: 'lms',
                    width: 800,
                    height: 450,
                    gravity: 'faces'
                });
                if(result){
                    blog.thumbnail.public_id = result.public_id;
                    blog.thumbnail.secure_url = result.url;
                    //remove file from server
                   fs.rm(`uploads/${req.file.filename}`)
                }
                
               
                
            }catch(e){
                console.error('Caught an error:', e);
                return await next(new AppError('upload faild try again!!!',500));
            }
        }

        await blog.save();
        res.status(201).json({
            sucess:true,
            message:"Blog Uploaded"
        })
    }catch(e){
        console.error('Caught an error:', e);
        return await next(new AppError('Invalid Data',400));
    }
    
};

//........................Get Blog.........................//
const all_blogs=async (req,res)=>{
    try{
        const blogs=await Blog.find({});
        console.log(blogs);
        res.status(200).json({
            succes:true,
            message:"sare blogs mil geya",
            blogs
        })
    }catch(e){
        return new AppError(e.message,400);
    }
    
};

 export{
    upload_blog,
    all_blogs
 }