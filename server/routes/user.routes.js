
import { Router } from "express";
import { register , login , logout , profile, forgotPassword, resetPassword } from "../controller/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js";
import { customer_register } from "../controller/customer.controller.js";
import { feedback_take } from "../controller/feedback.controller.js";
import { all_blogs, upload_blog } from "../controller/blog.controller.js";
const userRoutes=Router();

userRoutes.post('/register', upload.single("avatar"), register);
userRoutes.post('/customer/registration', customer_register);
userRoutes.post('/feedback', feedback_take);
userRoutes.post('/login',login);
userRoutes.get('/logout',logout);
userRoutes.get('/profile',profile);
userRoutes.post('/reset',forgotPassword);
userRoutes.post('/reset/:resetToken', resetPassword);
userRoutes.post('/upload-blog',upload.single("thumbnail"), upload_blog);
userRoutes.get('/read-blog', all_blogs);

export default userRoutes;